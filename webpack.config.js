// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   entry: path.resolve(__dirname, './src/index.js'),
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: [
//           { loader: 'babel-loader' },
//           {
//             loader: '@linaria/webpack5-loader',
//             options: {
//               sourceMap: process.env.NODE_ENV !== 'production',
//             },
//           }
//         ],
//       },
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader']
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['*', '.js']
//   },
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, './dist'),
//   }
// };
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@linaria'
              ]
            } },
          {
            loader: '@linaria/webpack5-loader',
            options: {
              babelOptions: {
                presets: [
                  '@linaria'
                ] 
              }
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  }
};
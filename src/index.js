import { css } from '@linaria/core';
const size = require('simple-dependency/sizes');

const finalValue = css`width: ${size.small}`;
document.querySelector('#app').innerHTML = 'Hello from your JavaScript file ...linaria class name: ' + finalValue;

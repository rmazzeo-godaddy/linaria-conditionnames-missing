import { css } from '@linaria/core';
const { size } = require('@siteglass/pattern-library/breakpoints');

const finalValue = css`width: ${size.mobileSm}`;
document.querySelector('#app').innerHTML = 'Hello from your JavaScript file ...linaria class name: ' + finalValue;

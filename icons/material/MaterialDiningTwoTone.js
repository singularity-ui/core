import React from 'react';
import styled from 'styled-components';

const MaterialDiningTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M4,20h16V4H4V20z M14.75,6c1.38,0,2.5,1.53,2.5,3.41c0,1.48-0.7,2.71-1.67,3.18l-0.08,0.03V19H14v-6.38 l-0.08-0.04c-0.97-0.47-1.67-1.7-1.67-3.18C12.25,7.52,13.38,6,14.75,6z M6.5,6.5C6.5,6.22,6.72,6,7,6s0.5,0.22,0.5,0.5V9h0.75 V6.5c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5V9H10V6.5C10,6.22,10.23,6,10.5,6C10.78,6,11,6.22,11,6.5v3.8 c0,0.93-0.64,1.71-1.5,1.93V19H8v-6.77c-0.86-0.22-1.5-1-1.5-1.93V6.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,20H4V4h16V20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8,12.23V19h1.5v-6.77c0.86-0.22,1.5-1,1.5-1.93V6.5C11,6.22,10.78,6,10.5,6C10.23,6,10,6.22,10,6.5V9H9.25V6.5 c0-0.28-0.22-0.5-0.5-0.5s-0.5,0.22-0.5,0.5V9H7.5V6.5C7.5,6.22,7.28,6,7,6S6.5,6.22,6.5,6.5v3.8C6.5,11.23,7.14,12.01,8,12.23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.92,12.58L14,12.62V19h1.5v-6.38l0.08-0.03c0.97-0.47,1.67-1.7,1.67-3.18c0-1.88-1.12-3.41-2.5-3.41 c-1.37,0-2.5,1.52-2.5,3.4C12.25,10.88,12.95,12.11,13.92,12.58z"
}))));

const MaterialDiningTwoTone = (styled.default || styled)(MaterialDiningTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDiningTwoTone;
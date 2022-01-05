import React from 'react';
import styled from 'styled-components';

const MaterialHowToRegSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none",
  "fill-rule": "evenodd"
}), /*#__PURE__*/React.createElement("g", {
  "fill-rule": "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"
})));

const MaterialHowToReg = (styled.default || styled)(MaterialHowToRegSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialHowToReg;
import React from 'react';
import styled from 'styled-components';

const MaterialSystemSecurityUpdateTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "1",
  opacity: ".3",
  width: "10",
  x: "7",
  y: "20"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  opacity: ".3",
  width: "10",
  x: "7",
  y: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1.01,17,1.01z M17,21H7v-1h10V21z M17,18H7V6h10V18z M17,4H7V3h10V4z M16,12h-3V8h-2v4H8l4,4L16,12z"
}))));

const MaterialSystemSecurityUpdateTwoTone = (styled.default || styled)(MaterialSystemSecurityUpdateTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSystemSecurityUpdateTwoTone;
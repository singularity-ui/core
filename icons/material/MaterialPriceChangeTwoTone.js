import React from 'react';
import styled from 'styled-components';

const MaterialPriceChangeTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M4,18h16V6H4V18z M16,8l2,2h-4L16,8z M18,14.25l-2,2l-2-2H18z M6,14h4v-1H7c-0.55,0-1-0.45-1-1V9 c0-0.55,0.45-1,1-1h1V7h2v1h2v2H8v1h3c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1h-1v1H8v-1H6V14z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M20,18H4V6h16V18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8,17h2v-1h1c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1H8v-1h4V8h-2V7H8v1H7C6.45,8,6,8.45,6,9v3c0,0.55,0.45,1,1,1h3v1H6v2 h2V17z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "16,8 14,10 18,10"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "18,14.25 14,14.25 16,16.25"
}))));

const MaterialPriceChangeTwoTone = (styled.default || styled)(MaterialPriceChangeTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPriceChangeTwoTone;
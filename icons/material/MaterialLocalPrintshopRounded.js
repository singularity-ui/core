import React from 'react';
import styled from 'styled-components';

const MaterialLocalPrintshopRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,7V4c0-0.55-0.45-1-1-1H7C6.45,3,6,3.45,6,4v3H18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,8H5c-1.66,0-3,1.34-3,3v5c0,0.55,0.45,1,1,1h3v2c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-2h3c0.55,0,1-0.45,1-1v-5 C22,9.34,20.66,8,19,8z M16,19H8v-4h8V19z M18,12.5c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S18.55,12.5,18,12.5z"
}))));

const MaterialLocalPrintshopRounded = (styled.default || styled)(MaterialLocalPrintshopRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLocalPrintshopRounded;
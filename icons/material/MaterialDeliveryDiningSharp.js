import React from 'react';
import styled from 'styled-components';

const MaterialDeliveryDiningSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,10.35V5h-5v2h3v2.65L13.52,14H10V9H2v7h2c0,1.66,1.34,3,3,3s3-1.34,3-3h4.48L19,10.35z M7,17c-0.55,0-1-0.45-1-1h2 C8,16.55,7.55,17,7,17z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "5",
  x: "5",
  y: "6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,13c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S20.66,13,19,13z M19,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 C20,16.55,19.55,17,19,17z"
})))));

const MaterialDeliveryDiningSharp = (styled.default || styled)(MaterialDeliveryDiningSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDeliveryDiningSharp;
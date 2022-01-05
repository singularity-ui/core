import React from 'react';
import styled from 'styled-components';

const MaterialBedroomParentSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "11",
  x: "6.5",
  y: "12"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "4",
  x: "7.25",
  y: "8.5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "4",
  x: "12.75",
  y: "8.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,2H2v20h20V2z M19,17h-1.5v-1.5h-11V17H5v-5l0.65-0.55V7H11c0.37,0,0.72,0.12,1,0.32C12.28,7.12,12.63,7,13,7h5.35 v4.45L19,12V17z"
}))));

const MaterialBedroomParentSharp = (styled.default || styled)(MaterialBedroomParentSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBedroomParentSharp;
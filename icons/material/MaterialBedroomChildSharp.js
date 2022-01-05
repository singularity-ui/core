import React from 'react';
import styled from 'styled-components';

const MaterialBedroomChildSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  width: "6",
  x: "9",
  y: "8.5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "9",
  x: "7.51",
  y: "12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,2H2v20h20V2z M18,17h-1.5v-1.5h-9V17H6l0-6.32l1.5-0.01V7h9v3.67l1.5,0V17z"
}))));

const MaterialBedroomChildSharp = (styled.default || styled)(MaterialBedroomChildSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBedroomChildSharp;
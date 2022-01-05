import React from 'react';
import styled from 'styled-components';

const MaterialFitScreenSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17,4h5v5h-2V6h-3V4z M4,9V6h3V4H2v5H4z M20,15v3h-3v2h5v-5H20z M7,18H4v-3H2v5h5V18z M18,8H6v8h12V8z"
})));

const MaterialFitScreenSharp = (styled.default || styled)(MaterialFitScreenSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFitScreenSharp;
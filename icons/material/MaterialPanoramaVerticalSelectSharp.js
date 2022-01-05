import React from 'react';
import styled from 'styled-components';

const MaterialPanoramaVerticalSelectSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18.49,11.99c0-5.25,1.54-9.01,1.92-10l-16.82,0c0.76,2.16,1.9,5.21,1.9,10c0,4.78-1.17,7.91-1.9,10l16.81,0 C19.66,19.91,18.49,16.76,18.49,11.99z"
})));

const MaterialPanoramaVerticalSelectSharp = (styled.default || styled)(MaterialPanoramaVerticalSelectSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPanoramaVerticalSelectSharp;
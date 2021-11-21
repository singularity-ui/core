import React from 'react';
import styled from 'styled-components';

const MaterialBrokenImageSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 3v8.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V3h18zm-3 8.42l3 3.01V21H3v-8.58l3 2.99 4-4 4 4 4-3.99z"
}));

const MaterialBrokenImageSharp = (styled.default || styled)(MaterialBrokenImageSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBrokenImageSharp;
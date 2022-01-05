import React from 'react';
import styled from 'styled-components';

const MaterialPlaylistPlaySharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "11",
  x: "3",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "11",
  x: "3",
  y: "6"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "7",
  x: "3",
  y: "14"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "16,13 16,21 22,17"
}))));

const MaterialPlaylistPlaySharp = (styled.default || styled)(MaterialPlaylistPlaySharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPlaylistPlaySharp;
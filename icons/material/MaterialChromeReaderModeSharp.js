import React from 'react';
import styled from 'styled-components';

const MaterialChromeReaderModeSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 12h7v1.5h-7V12zm0-2.5h7V11h-7V9.5zm0 5h7V16h-7v-1.5zM23 4H1v17h22V4zm-2 15h-9V6h9v13z"
}));

const MaterialChromeReaderModeSharp = (styled.default || styled)(MaterialChromeReaderModeSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialChromeReaderModeSharp;
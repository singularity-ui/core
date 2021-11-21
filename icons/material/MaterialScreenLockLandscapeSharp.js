import React from 'react';
import styled from 'styled-components';

const MaterialScreenLockLandscapeSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 5H1v14h22V5zm-4 12H5V7h14v10zM9 16h6v-5h-1v-.9c0-1-.69-1.92-1.68-2.08C11.07 7.83 10 8.79 10 10v1H9v5zm1.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4v-1z"
}));

const MaterialScreenLockLandscapeSharp = (styled.default || styled)(MaterialScreenLockLandscapeSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialScreenLockLandscapeSharp;
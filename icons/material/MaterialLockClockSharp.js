import React from 'react';
import styled from 'styled-components';

const MaterialLockClockSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,11c0.7,0,1.37,0.1,2,0.29V8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19C9.51,0.74,7,3.08,7,6v2H4v14h8.26 C11.47,20.87,11,19.49,11,18C11,14.13,14.13,11,18,11z M9,6c0-1.66,1.34-3,3-3s3,1.34,3,3v2H9V6z M18,13c-2.76,0-5,2.24-5,5 s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M19.65,20.35l-2.15-2.15V15h1v2.79l1.85,1.85L19.65,20.35z"
})));

const MaterialLockClockSharp = (styled.default || styled)(MaterialLockClockSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialLockClockSharp;
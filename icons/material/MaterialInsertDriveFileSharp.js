import React from 'react';
import styled from 'styled-components';

const MaterialInsertDriveFileSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M4.01 2L4 22h16V8l-6-6H4.01zM13 9V3.5L18.5 9H13z"
}));

const MaterialInsertDriveFileSharp = (styled.default || styled)(MaterialInsertDriveFileSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialInsertDriveFileSharp;
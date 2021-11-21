import React from 'react';
import styled from 'styled-components';

const MaterialArrowLeftSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M14 7l-5 5 5 5V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v24H0V0h24z",
  fill: "none"
}));

const MaterialArrowLeft = (styled.default || styled)(MaterialArrowLeftSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialArrowLeft;
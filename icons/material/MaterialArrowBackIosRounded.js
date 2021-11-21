import React from 'react';
import styled from 'styled-components';

const MaterialArrowBackIosRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none",
  opacity: ".87"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
}));

const MaterialArrowBackIosRounded = (styled.default || styled)(MaterialArrowBackIosRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialArrowBackIosRounded;
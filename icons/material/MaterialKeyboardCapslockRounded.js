import React from 'react';
import styled from 'styled-components';

const MaterialKeyboardCapslockRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 8.41l3.89 3.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.71 6.3c-.39-.39-1.02-.39-1.41 0l-4.6 4.59c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 8.41zM7 18h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"
}));

const MaterialKeyboardCapslockRounded = (styled.default || styled)(MaterialKeyboardCapslockRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialKeyboardCapslockRounded;
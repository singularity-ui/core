import React from 'react';
import styled from 'styled-components';

const MaterialClosedCaptionRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 6.5c0 .28-.22.5-.5.5H10c-.28 0-.5-.22-.5-.5h-2v3h2c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v.5zm7 0c0 .28-.22.5-.5.5H17c-.28 0-.5-.22-.5-.5h-2v3h2c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v.5z"
}));

const MaterialClosedCaptionRounded = (styled.default || styled)(MaterialClosedCaptionRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialClosedCaptionRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialViewCarouselRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,7h2c0.55,0,1,0.45,1,1v8c0,0.55-0.45,1-1,1H3c-0.55,0-1-0.45-1-1V8C2,7.45,2.45,7,3,7z M8,19h8c0.55,0,1-0.45,1-1V6 c0-0.55-0.45-1-1-1H8C7.45,5,7,5.45,7,6v12C7,18.55,7.45,19,8,19z M19,7h2c0.55,0,1,0.45,1,1v8c0,0.55-0.45,1-1,1h-2 c-0.55,0-1-0.45-1-1V8C18,7.45,18.45,7,19,7z"
}));

const MaterialViewCarouselRounded = (styled.default || styled)(MaterialViewCarouselRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialViewCarouselRounded;
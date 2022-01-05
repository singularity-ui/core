import React from 'react';
import styled from 'styled-components';

const MaterialViewCarouselSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2,7h4v10H2V7z M7,19h10V5H7V19z M18,7h4v10h-4V7z"
}));

const MaterialViewCarouselSharp = (styled.default || styled)(MaterialViewCarouselSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialViewCarouselSharp;
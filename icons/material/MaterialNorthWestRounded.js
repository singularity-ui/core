import React from 'react';
import styled from 'styled-components';

const MaterialNorthWestRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M6,15L6,15c0.56,0,1-0.45,1-1V8.41L17.89,19.3c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L8.41,7H14 c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1H6C5.45,5,5,5.45,5,6V14C5,14.55,5.45,15,6,15z"
}));

const MaterialNorthWestRounded = (styled.default || styled)(MaterialNorthWestRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNorthWestRounded;
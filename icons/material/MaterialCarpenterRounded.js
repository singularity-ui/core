import React from 'react';
import styled from 'styled-components';

const MaterialCarpenterRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M19.73,14.23L7.71,2.21c-0.39-0.39-1.02-0.39-1.41,0L3.7,4.8C3.36,5.14,3.31,5.68,3.59,6.08l7.65,10.98 c-0.78,0.78-0.78,2.05,0,2.83l1.41,1.41c0.78,0.78,2.05,0.78,2.83,0l4.24-4.24C20.51,16.28,20.51,15.01,19.73,14.23z M14.07,19.88 l-1.41-1.41l4.24-4.24l1.41,1.41L14.07,19.88z"
}));

const MaterialCarpenterRounded = (styled.default || styled)(MaterialCarpenterRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCarpenterRounded;
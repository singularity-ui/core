import React from 'react';
import styled from 'styled-components';

const MaterialVrpanoRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20.69,4.05C18.66,4.73,15.86,5.5,12,5.5c-3.89,0-6.95-0.84-8.69-1.43C2.67,3.85,2,4.33,2,5.02V19 c0,0.68,0.66,1.17,1.31,0.95C5.36,19.26,8.1,18.5,12,18.5c3.87,0,6.66,0.76,8.69,1.45C21.34,20.16,22,19.68,22,19V5 C22,4.32,21.34,3.84,20.69,4.05z M17.28,15.26C15.62,15.1,13.84,15,12,15c-1.87,0-3.63,0.1-5.28,0.27 C6.27,15.31,6,14.79,6.29,14.45l2.5-3c0.2-0.24,0.57-0.24,0.77,0l1.62,1.94l2.44-2.93c0.2-0.24,0.57-0.24,0.77,0l3.32,3.99 C17.99,14.79,17.72,15.31,17.28,15.26z"
})));

const MaterialVrpanoRounded = (styled.default || styled)(MaterialVrpanoRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialVrpanoRounded;
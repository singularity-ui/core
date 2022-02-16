import React from 'react';
import styled from 'styled-components';

const MaterialTtySvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14,4h2v2h-2V4z M13,7h2v2h-2V7z M11,4h2v2h-2V4z M18,9h-2V7h2V9z M19,6h-2V4h2V6z M21,9h-2V7h2V9z M22,6h-2V4h2V6z M14.62,14.38L12.1,16.9c-2.5-1.43-4.57-3.5-6-6l2.52-2.52C8.86,8.14,8.96,7.8,8.9,7.48L8.16,3.8C8.07,3.34,7.66,3,7.18,3H3.03 C2.47,3,2,3.47,2.03,4.03C2.2,6.92,3.05,9.63,4.43,12c1.58,2.73,3.85,4.99,6.57,6.57c2.37,1.37,5.08,2.23,7.97,2.4 c0.56,0.03,1.03-0.44,1.03-1v-4.15c0-0.48-0.34-0.89-0.8-0.98l-3.67-0.73C15.2,14.04,14.86,14.14,14.62,14.38z M14,10h2v2h-2V10z M11,10h2v2h-2V10z M19,12h-2v-2h2V12z M22,12h-2v-2h2V12z"
})));

const MaterialTty = (styled.default || styled)(MaterialTtySvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTty;
import React from 'react';
import styled from 'styled-components';

const MaterialUpcomingSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.16,7.26l-1.41-1.41L16.19,9.4l1.41,1.41C17.6,10.81,21.05,7.29,21.16,7.26z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  width: "2",
  x: "11",
  y: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.4,10.81L7.81,9.4L4.26,5.84L2.84,7.26C2.95,7.29,6.4,10.81,6.4,10.81z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,12h-5c0,1.66-1.34,3-3,3s-3-1.34-3-3H4c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-5 C22,12.9,21.1,12,20,12z"
}))));

const MaterialUpcoming = (styled.default || styled)(MaterialUpcomingSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialUpcoming;
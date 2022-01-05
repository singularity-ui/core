import React from 'react';
import styled from 'styled-components';

const MaterialAutoAwesomeMotionTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "8",
  opacity: ".3",
  width: "8",
  x: "12",
  y: "12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14,2H4C2.9,2,2,2.9,2,4v10h2V4h10V2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,10h-8c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-8C22,10.9,21.1,10,20,10z M20,20h-8v-8h8V20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,6H8C6.9,6,6,6.9,6,8v10h2V8h10V6z"
}))));

const MaterialAutoAwesomeMotionTwoTone = (styled.default || styled)(MaterialAutoAwesomeMotionTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAutoAwesomeMotionTwoTone;
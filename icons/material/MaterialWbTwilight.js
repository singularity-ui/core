import React from 'react';
import styled from 'styled-components';

const MaterialWbTwilightSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  transform: "matrix(0.7069 -0.7074 0.7074 0.7069 -0.3887 15.676)",
  width: "3",
  x: "17.22",
  y: "7.31"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "20",
  x: "2",
  y: "18"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  width: "2",
  x: "11",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -4.2992 6.1783)",
  width: "2",
  x: "4.31",
  y: "6.78"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,16h14c0-3.87-3.13-7-7-7S5,12.13,5,16z"
}))));

const MaterialWbTwilight = (styled.default || styled)(MaterialWbTwilightSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialWbTwilight;
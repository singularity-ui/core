import React from 'react';
import styled from 'styled-components';

const MaterialAddRoadSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18"
}), /*#__PURE__*/React.createElement("rect", {
  height: "9",
  width: "2",
  x: "18",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "16",
  width: "2",
  x: "4",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "2",
  x: "11",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "2",
  x: "11",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "2",
  x: "11",
  y: "16"
}))));

const MaterialAddRoad = (styled.default || styled)(MaterialAddRoadSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAddRoad;
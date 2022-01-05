import React from 'react';
import styled from 'styled-components';

const MaterialElectricalServicesSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
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
  width: "3",
  x: "18",
  y: "13"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "12,12 12,14 10,14 10,18 12,18 12,20 17,20 17,12"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "5,11 12,11 12,4 4,4 4,6 10,6 10,9 3,9 3,17 9,17 9,15 5,15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "3",
  x: "18",
  y: "17"
}))));

const MaterialElectricalServicesSharp = (styled.default || styled)(MaterialElectricalServicesSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialElectricalServicesSharp;
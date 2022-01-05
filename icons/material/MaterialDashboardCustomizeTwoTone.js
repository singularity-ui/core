import React from 'react';
import styled from 'styled-components';

const MaterialDashboardCustomizeTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  enableSource: "new",
  height: "4",
  opacity: ".3",
  width: "4",
  x: "5",
  y: "15"
}), /*#__PURE__*/React.createElement("rect", {
  enableSource: "new",
  height: "4",
  opacity: ".3",
  width: "4",
  x: "5",
  y: "5"
}), /*#__PURE__*/React.createElement("rect", {
  enableSource: "new",
  height: "4",
  opacity: ".3",
  width: "4",
  x: "15",
  y: "5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,11h8V3H3V11z M5,5h4v4H5V5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,3v8h8V3H13z M19,9h-4V5h4V9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,21h8v-8H3V21z M5,15h4v4H5V15z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "18,13 16,13 16,16 13,16 13,18 16,18 16,21 18,21 18,18 21,18 21,16 18,16"
}))));

const MaterialDashboardCustomizeTwoTone = (styled.default || styled)(MaterialDashboardCustomizeTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDashboardCustomizeTwoTone;
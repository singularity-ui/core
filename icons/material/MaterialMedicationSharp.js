import React from 'react';
import styled from 'styled-components';

const MaterialMedicationSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "12",
  x: "6",
  y: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,6H5v15h14V6z M16,15h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16V15z"
}))));

const MaterialMedicationSharp = (styled.default || styled)(MaterialMedicationSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMedicationSharp;
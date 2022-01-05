import React from 'react';
import styled from 'styled-components';

const MaterialDoubleArrowTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "15.5,5 11,5 16,12 11,19 15.5,19 20.5,12"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8.5,5 4,5 9,12 4,19 8.5,19 13.5,12"
}))));

const MaterialDoubleArrowTwoTone = (styled.default || styled)(MaterialDoubleArrowTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDoubleArrowTwoTone;
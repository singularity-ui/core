import React from 'react';
import styled from 'styled-components';

const MaterialAddToDriveTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,11c0.17,0,0.33,0.01,0.49,0.02L15,3H9l5.68,9.84C15.77,11.71,17.3,11,19,11z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8.15,4.52 2,15.5 5,21 11.33,10.03"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.2,15.5H9.9L6.73,21h7.81C13.58,19.94,13,18.54,13,17C13,16.48,13.07,15.98,13.2,15.5z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "20,16 20,13 18,13 18,16 15,16 15,18 18,18 18,21 19,21 20,21 20,18 23,18 23,16"
}))));

const MaterialAddToDriveTwoTone = (styled.default || styled)(MaterialAddToDriveTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAddToDriveTwoTone;
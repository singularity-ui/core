import React from 'react';
import styled from 'styled-components';

const MaterialFaceRetouchingOffOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "13",
  r: "1.25"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5,10c0.75,0,1.47-0.09,2.17-0.24C19.88,10.47,20,11.22,20,12c0,1.22-0.28,2.37-0.77,3.4l1.49,1.49 C21.53,15.44,22,13.78,22,12c0-5.52-4.48-10-10-10c-1.78,0-3.44,0.47-4.89,1.28l5.33,5.33C13.93,9.49,15.65,10,17.5,10z M10.66,4.12C11.09,4.05,11.54,4,12,4c2.9,0,5.44,1.56,6.84,3.88C18.41,7.95,17.96,8,17.5,8C14.6,8,12.06,6.44,10.66,4.12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.89,3.72l2.19,2.19C2.78,7.6,2,9.71,2,12c0,5.52,4.48,10,10,10c2.29,0,4.4-0.78,6.09-2.08l2.19,2.19l1.41-1.41 L3.31,2.31L1.89,3.72z M16.66,18.49C15.35,19.44,13.74,20,12,20c-4.41,0-8-3.59-8-8c0-0.05,0.01-0.1,0-0.14 c1.39-0.52,2.63-1.35,3.64-2.39L16.66,18.49z M6.23,8.06C5.7,8.61,5.09,9.09,4.42,9.47C4.68,8.7,5.05,7.99,5.51,7.34L6.23,8.06z"
}))));

const MaterialFaceRetouchingOffOutlined = (styled.default || styled)(MaterialFaceRetouchingOffOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFaceRetouchingOffOutlined;
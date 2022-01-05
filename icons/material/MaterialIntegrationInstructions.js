import React from 'react';
import styled from 'styled-components';

const MaterialIntegrationInstructionsSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "3.5",
  fill: "none",
  r: ".75"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "3.5",
  fill: "none",
  r: ".75"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "3.5",
  fill: "none",
  r: ".75"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C4.86,3,4.73,3.01,4.6,3.04C4.21,3.12,3.86,3.32,3.59,3.59 c-0.18,0.18-0.33,0.4-0.43,0.64C3.06,4.46,3,4.72,3,5v14c0,0.27,0.06,0.54,0.16,0.78c0.1,0.24,0.25,0.45,0.43,0.64 c0.27,0.27,0.62,0.47,1.01,0.55C4.73,20.99,4.86,21,5,21h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,14.17l-1.41,1.42L6,12 l3.59-3.59L11,9.83L8.83,12L11,14.17z M12,4.25c-0.41,0-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75s0.75,0.34,0.75,0.75 S12.41,4.25,12,4.25z M14.41,15.59L13,14.17L15.17,12L13,9.83l1.41-1.42L18,12L14.41,15.59z"
})));

const MaterialIntegrationInstructions = (styled.default || styled)(MaterialIntegrationInstructionsSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialIntegrationInstructions;
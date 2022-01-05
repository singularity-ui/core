import React from 'react';
import styled from 'styled-components';

const MaterialIntegrationInstructionsSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21,3h-6.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H3v18h18V3z M11,14.17l-1.41,1.42L6,12l3.59-3.59L11,9.83L8.83,12 L11,14.17z M12,4.25c-0.41,0-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75s0.75,0.34,0.75,0.75S12.41,4.25,12,4.25z M14.41,15.59 L13,14.17L15.17,12L13,9.83l1.41-1.42L18,12L14.41,15.59z"
})));

const MaterialIntegrationInstructionsSharp = (styled.default || styled)(MaterialIntegrationInstructionsSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialIntegrationInstructionsSharp;
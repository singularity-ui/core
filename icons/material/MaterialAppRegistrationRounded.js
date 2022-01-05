import React from 'react';
import styled from 'styled-components';

const MaterialAppRegistrationRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  cx: "12",
  cy: "6",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "18",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "12",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "6",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "6",
  r: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,18.07v1.43c0,0.28,0.22,0.5,0.5,0.5h1.4c0.13,0,0.26-0.05,0.35-0.15l5.83-5.83l-2.12-2.12l-5.81,5.81 C11.05,17.81,11,17.94,11,18.07z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.03,14L14,12.03V12c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2H12.03z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.85,11.56l-1.41-1.41c-0.2-0.2-0.51-0.2-0.71,0l-1.06,1.06l2.12,2.12l1.06-1.06C21.05,12.07,21.05,11.76,20.85,11.56z"
}))));

const MaterialAppRegistrationRounded = (styled.default || styled)(MaterialAppRegistrationRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAppRegistrationRounded;
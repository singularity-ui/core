import React from 'react';
import styled from 'styled-components';

const MaterialBiotechRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.46-2.56 C8.17,9.03,8,8.54,8,8c0-0.21,0.04-0.42,0.09-0.62C6.28,8.13,5,9.92,5,12c0,2.76,2.24,5,5,5v2H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.56,5.51C11.91,5.54,13,6.64,13,8c0,0.75-0.33,1.41-0.85,1.87l0.25,0.68c0.19,0.52,0.76,0.79,1.28,0.6 c0.19,0.52,0.76,0.79,1.28,0.6c0.52-0.19,0.79-0.76,0.6-1.28c0.52-0.19,0.79-0.76,0.6-1.28L14.1,3.54 c-0.19-0.52-0.76-0.79-1.28-0.6c-0.19-0.52-0.76-0.79-1.28-0.6c-0.52,0.19-0.79,0.76-0.6,1.28c-0.52,0.19-0.79,0.76-0.6,1.28 L10.56,5.51z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10.5",
  cy: "8",
  r: "1.5"
}))));

const MaterialBiotechRounded = (styled.default || styled)(MaterialBiotechRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBiotechRounded;
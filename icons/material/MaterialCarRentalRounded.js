import React from 'react';
import styled from 'styled-components';

const MaterialCarRentalRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M8,7c1.3,0,2.41-0.84,2.83-2H16v1c0,0.55,0.45,1,1,1s1-0.45,1-1V5h0c0.55,0,1-0.45,1-1s-0.45-1-1-1h-7.17 C10.35,1.65,8.95,0.76,7.4,1.06C6.23,1.29,5.28,2.25,5.05,3.42C4.7,5.32,6.15,7,8,7z M8,3c0.55,0,1,0.45,1,1S8.55,5,8,5S7,4.55,7,4 S7.45,3,8,3z M16.39,9H7.61C7.18,9,6.8,9.28,6.66,9.68L5,14.69V21c0,0.55,0.45,1,1,1s1-0.45,1-1v-1h10v1c0,0.55,0.45,1,1,1 s1-0.45,1-1v-6.31l-1.66-5.01C17.2,9.28,16.82,9,16.39,9z M9,17.5c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S9.55,17.5,9,17.5z M15,17.5c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,17.5,15,17.5z M7.67,13l0.66-2h7.34l0.66,2H7.67z"
})));

const MaterialCarRentalRounded = (styled.default || styled)(MaterialCarRentalRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCarRentalRounded;
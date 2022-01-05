import React from 'react';
import styled from 'styled-components';

const MaterialBreakfastDiningRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M18,3H6C3.79,3,2,4.79,2,7c0,1.48,0.81,2.75,2,3.45V19c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-8.55c1.19-0.69,2-1.97,2-3.45 C22,4.79,20.21,3,18,3z M15.71,13.7l-3,3c-0.39,0.39-1.02,0.39-1.42,0l-3-3c-0.39-0.39-0.39-1.02,0-1.41l3-3 c0.39-0.39,1.02-0.39,1.41,0l3,3C16.1,12.68,16.1,13.31,15.71,13.7z"
})));

const MaterialBreakfastDiningRounded = (styled.default || styled)(MaterialBreakfastDiningRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBreakfastDiningRounded;
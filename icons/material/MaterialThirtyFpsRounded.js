import React from 'react';
import styled from 'styled-components';

const MaterialThirtyFpsRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M2,6.5L2,6.5C2,7.33,2.67,8,3.5,8H8v2.5H4.5C3.67,10.5,3,11.17,3,12v0c0,0.83,0.67,1.5,1.5,1.5H8V16H3.5 C2.67,16,2,16.67,2,17.5v0C2,18.33,2.67,19,3.5,19H8c1.66,0,3-1.34,3-3v-1.9c0-1.16-0.94-2.1-2.1-2.1c1.16,0,2.1-0.94,2.1-2.1V8 c0-1.66-1.34-3-3-3H3.5C2.67,5,2,5.67,2,6.5z M19,8v8h-4V8H19 M19,5h-4c-1.66,0-3,1.34-3,3v8c0,1.66,1.34,3,3,3h4 c1.66,0,3-1.34,3-3V8C22,6.34,20.66,5,19,5z"
}))));

const MaterialThirtyFpsRounded = (styled.default || styled)(MaterialThirtyFpsRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialThirtyFpsRounded;
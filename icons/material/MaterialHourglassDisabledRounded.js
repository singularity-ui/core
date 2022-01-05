import React from 'react';
import styled from 'styled-components';

const MaterialHourglassDisabledRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M2.81,2.81c-0.39-0.39-1.02-0.39-1.41,0C1,3.2,1,3.83,1.39,4.22l8.19,8.19l-3,3.01C6.21,15.8,6,16.31,6,16.84V20 c0,1.1,0.9,2,2,2h8c0.86,0,1.58-0.54,1.87-1.3l1.91,1.91c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L2.81,2.81z M16,19c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1v-2.5l2.84-2.84L16,18.83V19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8,5c0-0.55,0.45-1,1-1h6c0.55,0,1,0.45,1,1v2.5l-2.84,2.84l1.25,1.25l3-2.99C17.79,8.22,18,7.71,18,7.18V4 c0-1.11-0.9-2-2-2H8C7.14,2,6.42,2.54,6.13,3.3L8,5.17V5z"
}))));

const MaterialHourglassDisabledRounded = (styled.default || styled)(MaterialHourglassDisabledRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHourglassDisabledRounded;
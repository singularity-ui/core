import React from 'react';
import styled from 'styled-components';

const MaterialNightsStayTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M8.1,14.15C9.77,14.63,11,16.17,11,18c0,0.68-0.19,1.31-0.48,1.87c0.48,0.09,0.97,0.14,1.48,0.14 c1.48,0,2.9-0.41,4.13-1.15c-2.62-0.92-5.23-2.82-6.8-5.86C7.74,9.94,7.78,7.09,8.29,4.9c-2.57,1.33-4.3,4.01-4.3,7.1c0,0,0,0,0,0 c0.01,0,0.01,0,0.02,0C5.66,12,7.18,12.83,8.1,14.15z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.78,17.51c-2.47,0-6.57-1.33-8.68-5.43C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12 c0,0.14,0.02,0.28,0.02,0.42C2.61,12.16,3.28,12,3.98,12c0,0,0,0,0,0c0-3.09,1.73-5.77,4.3-7.1C7.78,7.09,7.74,9.94,9.32,13 c1.57,3.04,4.18,4.95,6.8,5.86c-1.23,0.74-2.65,1.15-4.13,1.15c-0.5,0-1-0.05-1.48-0.14c-0.37,0.7-0.94,1.27-1.64,1.64 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C20.18,17.5,19.98,17.51,19.78,17.51z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z"
}))));

const MaterialNightsStayTwoTone = (styled.default || styled)(MaterialNightsStayTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialNightsStayTwoTone;
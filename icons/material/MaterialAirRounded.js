import React from 'react';
import styled from 'styled-components';

const MaterialAirRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M14.35,17.95c-0.28,0.89-1.01,1.62-1.9,1.9c-1.51,0.48-2.94-0.23-3.59-1.42C8.51,17.78,9.03,17,9.77,17h0.01 c0.34,0,0.68,0.16,0.84,0.46c0.17,0.32,0.5,0.54,0.89,0.54c0.55,0,1-0.45,1-1s-0.45-1-1-1H3c-0.55,0-1-0.45-1-1v0 c0-0.55,0.45-1,1-1h8.5C13.46,14,15,15.9,14.35,17.95z M18.91,5.67c-0.29-1.26-1.32-2.29-2.58-2.58c-1.76-0.4-3.37,0.53-4.02,1.98 C12,5.74,12.48,6.5,13.21,6.5h0c0.39,0,0.75-0.22,0.9-0.57C14.34,5.38,14.87,5,15.5,5C16.33,5,17,5.67,17,6.5S16.33,8,15.5,8H3 C2.45,8,2,8.45,2,9v0c0,0.55,0.45,1,1,1h12.5C17.7,10,19.43,7.96,18.91,5.67z M18.4,11L3,11c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h15.5c0.83,0,1.5,0.67,1.5,1.5c0,0.63-0.38,1.16-0.93,1.39c-0.36,0.15-0.57,0.51-0.57,0.9v0 c0,0.73,0.76,1.21,1.43,0.91c1.43-0.64,2.35-2.21,2-3.93C21.59,12.13,20.07,11,18.4,11z"
}))));

const MaterialAirRounded = (styled.default || styled)(MaterialAirRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAirRounded;
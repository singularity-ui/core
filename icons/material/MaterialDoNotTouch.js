import React from 'react';
import styled from 'styled-components';

const MaterialDoNotTouchSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,10.17l-2.5-2.5V2.25C10.5,1.56,11.06,1,11.75,1S13,1.56,13,2.25V10.17z M20,12.75V11V5.25C20,4.56,19.44,4,18.75,4 S17.5,4.56,17.5,5.25V11h-1V3.25C16.5,2.56,15.94,2,15.25,2S14,2.56,14,3.25v7.92l6,6V12.75z M9.5,4.25C9.5,3.56,8.94,3,8.25,3 c-0.67,0-1.2,0.53-1.24,1.18L9.5,6.67V4.25z M13,10.17l-2.5-2.5V2.25C10.5,1.56,11.06,1,11.75,1S13,1.56,13,2.25V10.17z M20,12.75 V11V5.25C20,4.56,19.44,4,18.75,4S17.5,4.56,17.5,5.25V11h-1V3.25C16.5,2.56,15.94,2,15.25,2S14,2.56,14,3.25v7.92l6,6V12.75z M9.5,4.25C9.5,3.56,8.94,3,8.25,3c-0.67,0-1.2,0.53-1.24,1.18L9.5,6.67V4.25z M21.19,21.19L2.81,2.81L1.39,4.22l5.63,5.63L7,9.83 v4.3c-1.11-0.64-2.58-1.47-2.6-1.48c-0.17-0.09-0.34-0.14-0.54-0.14c-0.26,0-0.5,0.09-0.7,0.26C3.12,12.78,2,13.88,2,13.88 l6.8,7.18c0.57,0.6,1.35,0.94,2.18,0.94H17c0.62,0,1.18-0.19,1.65-0.52l-0.02-0.02l1.15,1.15L21.19,21.19z"
})));

const MaterialDoNotTouch = (styled.default || styled)(MaterialDoNotTouchSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDoNotTouch;
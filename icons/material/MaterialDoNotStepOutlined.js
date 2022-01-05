import React from 'react';
import styled from 'styled-components';

const MaterialDoNotStepOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.51,15.68l-1.41-1.41l4.48-4.48L23,11.2L18.51,15.68z M14.98,12.15 M14.98,12.15l3.07-3.07L13.8,4.82l-3.08,3.07 L9.3,6.47L13.8,2l0,0l7.08,7.08l-4.48,4.48L14.98,12.15z M21.18,21.2l-1.41,1.41l-5.94-5.94L10.5,20H1v-2.63 c0-0.84,0.52-1.57,1.3-1.88c0.58-0.23,1.28-0.56,1.97-1.02l1.38,1.38C5.74,15.95,5.87,16,6,16s0.26-0.05,0.36-0.15 c0.2-0.2,0.2-0.51,0-0.71l-1.28-1.28c0.27-0.24,0.53-0.51,0.77-0.8l1.27,1.27c0.09,0.1,0.23,0.15,0.35,0.15s0.25-0.05,0.35-0.15 c0.2-0.2,0.2-0.51,0-0.71l-1.4-1.4c0.19-0.34,0.34-0.72,0.45-1.12l1.71,1.72c0.09,0.1,0.23,0.15,0.35,0.15s0.25-0.05,0.35-0.15 c0.19-0.2,0.19-0.5,0.01-0.7l-7.9-7.9l1.42-1.41L21.18,21.2z M12.42,15.26l-1.67-1.68L7.42,16.9c-0.78,0.78-2.05,0.78-2.83-0.01 L4.4,16.72l-0.47,0.24c-0.29,0.14-0.59,0.27-0.89,0.39L3.03,18h6.64L12.42,15.26z"
})));

const MaterialDoNotStepOutlined = (styled.default || styled)(MaterialDoNotStepOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDoNotStepOutlined;
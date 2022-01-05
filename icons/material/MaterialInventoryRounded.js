import React from 'react';
import styled from 'styled-components';

const MaterialInventoryRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M5,5h2v1c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5 C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.75,12.25c-0.41-0.41-1.09-0.41-1.5,0L15.51,17l-2.26-2.25c-0.41-0.41-1.08-0.41-1.5,0l0,0c-0.41,0.41-0.41,1.09,0,1.5 l3.05,3.04c0.39,0.39,1.02,0.39,1.41,0l5.53-5.54C22.16,13.34,22.16,12.66,21.75,12.25z"
}))));

const MaterialInventoryRounded = (styled.default || styled)(MaterialInventoryRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialInventoryRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialRMobiledataRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7.8,7.2l0.65,1.52C8.71,9.33,8.27,10,7.61,10h0c-0.37,0-0.7-0.22-0.85-0.56L5.87,7.33H4v1.75C4,9.59,3.59,10,3.08,10 H2.92C2.41,10,2,9.59,2,9.08V3c0-0.55,0.45-1,1-1h4c1.1,0,2,0.9,2,2v1.33C9,6.13,8.47,6.87,7.8,7.2z M7,4H4v1.33h3V4z"
}))));

const MaterialRMobiledataRounded = (styled.default || styled)(MaterialRMobiledataRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialRMobiledataRounded;
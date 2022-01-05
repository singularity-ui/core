import React from 'react';
import styled from 'styled-components';

const MaterialEditOffSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21.41,6.33l-3.75-3.75l-2.53,2.54l3.75,3.75L21.41,6.33z M1.39,4.22l7.32,7.32L3,17.25V21h3.75l5.71-5.71l7.32,7.32 l1.41-1.41L2.81,2.81L1.39,4.22z M17.81,9.94l-3.75-3.75l-2.52,2.52l3.75,3.75L17.81,9.94z"
}))));

const MaterialEditOffSharp = (styled.default || styled)(MaterialEditOffSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialEditOffSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialHMobiledataRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M15,11H9V8c0-0.55-0.45-1-1-1h0C7.45,7,7,7.45,7,8v8c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3h6v3c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1V8c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1V11z"
}))));

const MaterialHMobiledataRounded = (styled.default || styled)(MaterialHMobiledataRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHMobiledataRounded;
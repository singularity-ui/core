import React from 'react';
import styled from 'styled-components';

const MaterialHorizontalRuleTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  "fill-rule": "evenodd",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  "fill-rule": "evenodd",
  height: "2",
  width: "16",
  x: "4",
  y: "11"
}))));

const MaterialHorizontalRuleTwoTone = (styled.default || styled)(MaterialHorizontalRuleTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHorizontalRuleTwoTone;
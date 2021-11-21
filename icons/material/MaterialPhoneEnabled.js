import React from 'react';
import styled from 'styled-components';

const MaterialPhoneEnabledSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.38 10.79l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.35-.12.75-.03 1.02.24l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59z"
}));

const MaterialPhoneEnabled = (styled.default || styled)(MaterialPhoneEnabledSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPhoneEnabled;
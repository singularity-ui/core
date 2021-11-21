import React from 'react';
import styled from 'styled-components';

const MaterialThreeGMobiledataOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z"
}))));

const MaterialThreeGMobiledataOutlined = (styled.default || styled)(MaterialThreeGMobiledataOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialThreeGMobiledataOutlined;
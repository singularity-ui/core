import React from 'react';
import styled from 'styled-components';

const MaterialFlashlightOnOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,2H6v6l2,3v11h8V11l2-3V2z M16,4v1H8V4H16z M14,10.4V20h-4v-9.61l-2-3V7h8v0.39L14,10.4z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "14",
  r: "1.5"
}))));

const MaterialFlashlightOnOutlined = (styled.default || styled)(MaterialFlashlightOnOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFlashlightOnOutlined;
import React from 'react';
import styled from 'styled-components';

const MaterialLocalTaxiOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7.5",
  cy: "14.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16.5",
  cy: "14.5",
  r: "1.5"
}));

const MaterialLocalTaxiOutlined = (styled.default || styled)(MaterialLocalTaxiOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialLocalTaxiOutlined;
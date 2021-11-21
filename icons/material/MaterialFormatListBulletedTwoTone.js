import React from 'react';
import styled from 'styled-components';

const MaterialFormatListBulletedTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 5h14v2H7z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "6",
  r: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "12",
  r: "1.5"
}));

const MaterialFormatListBulletedTwoTone = (styled.default || styled)(MaterialFormatListBulletedTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFormatListBulletedTwoTone;
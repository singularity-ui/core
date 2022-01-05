import React from 'react';
import styled from 'styled-components';

const MaterialPinDropTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  version: "1",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M12,3C9.19,3,6,5.11,6,9.13c0,2.68,2,5.49,6,8.44c4-2.95,6-5.77,6-8.44C18,5.11,14.81,3,12,3z",
  "fill-opacity": ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,4c1.93,0,5,1.4,5,5.15c0,2.16-1.72,4.67-5,7.32c-3.28-2.65-5-5.17-5-7.32C7,5.4,10.07,4,12,4 M12,2 C8.73,2,5,4.46,5,9.15c0,3.12,2.33,6.41,7,9.85c4.67-3.44,7-6.73,7-9.85C19,4.46,15.27,2,12,2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,7c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,7,12,7z M5,20h14v2H5V20z"
}));

const MaterialPinDropTwoTone = (styled.default || styled)(MaterialPinDropTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPinDropTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialSimCardDownloadTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6,8.83V20h12V4h-7.17L6,8.83z M11,9.02L13,9v4h3l-4,4l-4-4h3V9.02z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,2h-8L4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,20H6V8.83L10.83,4H18V20z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "12,17 16,13 13,13 13,9 11,9.02 11,13 8,13"
}))));

const MaterialSimCardDownloadTwoTone = (styled.default || styled)(MaterialSimCardDownloadTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSimCardDownloadTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialManageSearchTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "5",
  x: "2",
  y: "12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.17,13.75C18.69,12.96,19,12.02,19,11c0-2.76-2.24-5-5-5s-5,2.24-5,5s2.24,5,5,5c1.02,0,1.96-0.31,2.76-0.83L20.59,19 L22,17.59L18.17,13.75z M14,14c-1.65,0-3-1.35-3-3c0-1.65,1.35-3,3-3s3,1.35,3,3C17,12.65,15.65,14,14,14z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "5",
  x: "2",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "10",
  x: "2",
  y: "17"
}))));

const MaterialManageSearchTwoTone = (styled.default || styled)(MaterialManageSearchTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialManageSearchTwoTone;
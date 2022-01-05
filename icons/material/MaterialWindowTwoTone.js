import React from 'react';
import styled from 'styled-components';

const MaterialWindowTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  height: "7",
  opacity: ".3",
  width: "7",
  x: "4",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "7",
  opacity: ".3",
  width: "7",
  x: "4",
  y: "13"
}), /*#__PURE__*/React.createElement("rect", {
  height: "7",
  opacity: ".3",
  width: "7",
  x: "13",
  y: "13"
}), /*#__PURE__*/React.createElement("rect", {
  height: "7",
  opacity: ".3",
  width: "7",
  x: "13",
  y: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M11,20H4v-7h7V20z M11,11H4V4h7V11 z M20,20h-7v-7h7V20z M20,11h-7V4h7V11z"
}))));

const MaterialWindowTwoTone = (styled.default || styled)(MaterialWindowTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialWindowTwoTone;
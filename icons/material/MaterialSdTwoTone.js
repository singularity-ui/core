import React from 'react';
import styled from 'styled-components';

const MaterialSdTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M4,18h16V6H4V18z M13,9h4c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1h-4V9z M6,13h1.5v0.5h2v-1H7 c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1H9.5v-0.5h-2v1H10c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1H7 c-0.55,0-1-0.45-1-1V13z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  opacity: ".3",
  width: "2",
  x: "14.5",
  y: "10.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7,15h3c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1H7.5v-1h2V11H11v-1c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v1.5 c0,0.55,0.45,1,1,1h2.5v1h-2V13H6v1C6,14.55,6.45,15,7,15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,14v-4c0-0.55-0.45-1-1-1h-4v6h4C17.55,15,18,14.55,18,14z M16.5,13.5h-2v-3h2V13.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,4H4C2.89,4,2,4.9,2,6v12c0,1.1,0.89,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z"
}))));

const MaterialSdTwoTone = (styled.default || styled)(MaterialSdTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSdTwoTone;
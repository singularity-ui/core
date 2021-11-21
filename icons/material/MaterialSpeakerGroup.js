import React from 'react';
import styled from 'styled-components';

const MaterialSpeakerGroupSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "12.5",
  r: "2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z"
}));

const MaterialSpeakerGroup = (styled.default || styled)(MaterialSpeakerGroupSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSpeakerGroup;
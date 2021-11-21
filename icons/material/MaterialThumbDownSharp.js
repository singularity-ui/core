import React from 'react';
import styled from 'styled-components';

const MaterialThumbDownSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.83 23L17 15.82V3H4.69L1 11.6V16h8.31l-1.12 5.38zM19 3h4v12h-4z"
}));

const MaterialThumbDownSharp = (styled.default || styled)(MaterialThumbDownSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialThumbDownSharp;
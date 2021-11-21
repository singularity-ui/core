import React from 'react';
import styled from 'styled-components';

const MaterialEventSeatTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 5h6v7H9z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 21h2v-4h12v4h2v-6H4zM17 5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v9h10V5zm-2 7H9V5h6v7zm4-2h3v3h-3zM2 10h3v3H2z"
}));

const MaterialEventSeatTwoTone = (styled.default || styled)(MaterialEventSeatTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialEventSeatTwoTone;
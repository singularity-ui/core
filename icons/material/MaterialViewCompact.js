import React from 'react';
import styled from 'styled-components';

const MaterialViewCompactSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"
}));

const MaterialViewCompact = (styled.default || styled)(MaterialViewCompactSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialViewCompact;
import React from 'react';
import styled from 'styled-components';

const MaterialViewDaySharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z"
}));

const MaterialViewDaySharp = (styled.default || styled)(MaterialViewDaySharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialViewDaySharp;
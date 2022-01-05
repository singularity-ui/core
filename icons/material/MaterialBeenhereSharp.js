import React from 'react';
import styled from 'styled-components';

const MaterialBeenhereSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.01 1L3 17l9 6 8.99-6L21 1H3.01zM10 16l-5-5 1.41-1.42L10 13.17l7.59-7.59L19 7l-9 9z"
}));

const MaterialBeenhereSharp = (styled.default || styled)(MaterialBeenhereSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBeenhereSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialSkipNextSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"
}));

const MaterialSkipNextSharp = (styled.default || styled)(MaterialSkipNextSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSkipNextSharp;
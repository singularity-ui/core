import React from 'react';
import styled from 'styled-components';

const MaterialCheckBoxOutlineBlankSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 5v14H5V5h14m2-2H3v18h18V3z"
}));

const MaterialCheckBoxOutlineBlankSharp = (styled.default || styled)(MaterialCheckBoxOutlineBlankSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCheckBoxOutlineBlankSharp;
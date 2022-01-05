import React from 'react';
import styled from 'styled-components';

const MaterialNorthEastSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"
}));

const MaterialNorthEastSharp = (styled.default || styled)(MaterialNorthEastSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNorthEastSharp;
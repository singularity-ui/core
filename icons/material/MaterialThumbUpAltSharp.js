import React from 'react';
import styled from 'styled-components';

const MaterialThumbUpAltSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none",
  opacity: ".87"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.17 1L7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z"
}));

const MaterialThumbUpAltSharp = (styled.default || styled)(MaterialThumbUpAltSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialThumbUpAltSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialLocalSeeSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3.2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 4h-5.17L15 2H9L7.17 4H2v16h20V4zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
}));

const MaterialLocalSeeSharp = (styled.default || styled)(MaterialLocalSeeSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLocalSeeSharp;
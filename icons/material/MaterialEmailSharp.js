import React from 'react';
import styled from 'styled-components';

const MaterialEmailSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 4H2v16h20V4zm-2 4l-8 5-8-5V6l8 5 8-5v2z"
}));

const MaterialEmailSharp = (styled.default || styled)(MaterialEmailSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialEmailSharp;
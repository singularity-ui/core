import React from 'react';
import styled from 'styled-components';

const MaterialTitleSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 4v3h5.5v12h3V7H19V4H5z"
}));

const MaterialTitleSharp = (styled.default || styled)(MaterialTitleSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTitleSharp;
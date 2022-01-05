import React from 'react';
import styled from 'styled-components';

const MaterialFeaturedPlayListSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 3H1v18h22V3zm-11 8H3V9h9v2zm0-4H3V5h9v2z"
}));

const MaterialFeaturedPlayListSharp = (styled.default || styled)(MaterialFeaturedPlayListSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFeaturedPlayListSharp;
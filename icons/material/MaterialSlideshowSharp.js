import React from 'react';
import styled from 'styled-components';

const MaterialSlideshowSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 8v8l5-4-5-4zm11-5H3v18h18V3zm-2 16H5V5h14v14z"
}));

const MaterialSlideshowSharp = (styled.default || styled)(MaterialSlideshowSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSlideshowSharp;
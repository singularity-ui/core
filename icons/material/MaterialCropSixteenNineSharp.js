import React from 'react';
import styled from 'styled-components';

const MaterialCropSixteenNineSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 6H3v12h18V6zm-2 10H5V8h14v8z"
}));

const MaterialCropSixteenNineSharp = (styled.default || styled)(MaterialCropSixteenNineSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCropSixteenNineSharp;
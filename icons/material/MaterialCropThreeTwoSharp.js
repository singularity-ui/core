import React from 'react';
import styled from 'styled-components';

const MaterialCropThreeTwoSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 4H3v16h18V4zm-2 14H5V6h14v12z"
}));

const MaterialCropThreeTwoSharp = (styled.default || styled)(MaterialCropThreeTwoSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCropThreeTwoSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialResetTvSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "22,10 12.99,10 12.99,7 9,11 12.99,15 12.99,12 20,12 20,17 4,17 4,5 20,5 20,8 22,8 22,3 2,3 2,19 8,19 8,21 16,21 16,19 22,19"
})));

const MaterialResetTvSharp = (styled.default || styled)(MaterialResetTvSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialResetTvSharp;
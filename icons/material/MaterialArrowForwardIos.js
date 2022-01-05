import React from 'react';
import styled from 'styled-components';

const MaterialArrowForwardIosSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"
})));

const MaterialArrowForwardIos = (styled.default || styled)(MaterialArrowForwardIosSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialArrowForwardIos;
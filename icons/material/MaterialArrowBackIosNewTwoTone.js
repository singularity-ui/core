import React from 'react';
import styled from 'styled-components';

const MaterialArrowBackIosNewTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"
})));

const MaterialArrowBackIosNewTwoTone = (styled.default || styled)(MaterialArrowBackIosNewTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialArrowBackIosNewTwoTone;
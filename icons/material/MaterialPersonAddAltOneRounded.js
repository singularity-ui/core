import React from 'react';
import styled from 'styled-components';

const MaterialPersonAddAltOneRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "8",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9,14c-2.67,0-8,1.34-8,4v1c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1v-1C17,15.34,11.67,14,9,14z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "20,10 20,7 18,7 18,10 15,10 15,12 18,12 18,15 20,15 20,12 23,12 23,10"
}))));

const MaterialPersonAddAltOneRounded = (styled.default || styled)(MaterialPersonAddAltOneRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPersonAddAltOneRounded;
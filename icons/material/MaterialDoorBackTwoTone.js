import React from 'react';
import styled from 'styled-components';

const MaterialDoorBackTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7,19h10V5H7V19z M9,11h2v2H9V11z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,19V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v14H3v2h18v-2H19z M17,19H7V5h10V19z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "9",
  y: "11"
}))));

const MaterialDoorBackTwoTone = (styled.default || styled)(MaterialDoorBackTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDoorBackTwoTone;
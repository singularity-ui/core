import React from 'react';
import styled from 'styled-components';

const MaterialNineKTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5,19h14V5H5V19z M13,9h1.5v2.25L16.25,9H18l-2.25,3L18,15h-1.75l-1.75-2.25V15H13V9z M6.5,13.5h3v-1h-2 c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1H10c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H6.5V13.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  opacity: ".3",
  width: "1.5",
  x: "8",
  y: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,14v-4c0-0.55-0.45-1-1-1H7.5c-0.55,0-1,0.45-1,1v1.5c0,0.55,0.45,1,1,1h2v1h-3V15H10C10.55,15,11,14.55,11,14z M9.5,11.5H8V10h1.5V11.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "14.5,12.75 16.25,15 18,15 15.75,12 18,9 16.25,9 14.5,11.25 14.5,9 13,9 13,15 14.5,15"
}))));

const MaterialNineKTwoTone = (styled.default || styled)(MaterialNineKTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNineKTwoTone;
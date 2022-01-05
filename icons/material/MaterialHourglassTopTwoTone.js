import React from 'react';
import styled from 'styled-components';

const MaterialHourglassTopTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "8,7.5 12,11.5 16,7.5 16,4 8,4"
}), /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "8,7.5 12,11.5 16,7.5 16,4 8,4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,2H6v6l4,4l-3.99,4.01L6,22h12l-0.01-5.99L14,12l4-3.99V2z M16,16.5V20H8v-3.5l4-4L16,16.5z M16,7.5l-4,4l-4-4V4h8V7.5 z"
}))));

const MaterialHourglassTopTwoTone = (styled.default || styled)(MaterialHourglassTopTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialHourglassTopTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialFileUploadTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  points: "9.83,8 11,8 11,14 13,14 13,8 14.17,8 12,5.83"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "14",
  x: "5",
  y: "18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,10h4v6h6v-6h4l-7-7L5,10z M13,8v6h-2V8H9.83L12,5.83L14.17,8H13z"
}))));

const MaterialFileUploadTwoTone = (styled.default || styled)(MaterialFileUploadTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFileUploadTwoTone;
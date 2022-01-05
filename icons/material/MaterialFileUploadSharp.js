import React from 'react';
import styled from 'styled-components';

const MaterialFileUploadSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5,10h4v6h6v-6h4l-7-7L5,10z M5,18v2h14v-2H5z"
})));

const MaterialFileUploadSharp = (styled.default || styled)(MaterialFileUploadSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFileUploadSharp;
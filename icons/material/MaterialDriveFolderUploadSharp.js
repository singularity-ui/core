import React from 'react';
import styled from 'styled-components';

const MaterialDriveFolderUploadSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M22,6H12l-2-2H2v16h20V6z M13,13v4h-2v-4H8l4.01-4L16,13H13z"
})));

const MaterialDriveFolderUploadSharp = (styled.default || styled)(MaterialDriveFolderUploadSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDriveFolderUploadSharp;
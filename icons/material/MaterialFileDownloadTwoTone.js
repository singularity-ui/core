import React from 'react';
import styled from 'styled-components';

const MaterialFileDownloadTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  points: "14.17,11 13,11 13,5 11,5 11,11 9.83,11 12,13.17"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "14",
  x: "5",
  y: "18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,9h-4V3H9v6H5l7,7L19,9z M11,11V5h2v6h1.17L12,13.17L9.83,11H11z"
}))));

const MaterialFileDownloadTwoTone = (styled.default || styled)(MaterialFileDownloadTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFileDownloadTwoTone;
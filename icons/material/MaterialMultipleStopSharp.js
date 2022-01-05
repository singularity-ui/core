import React from 'react';
import styled from 'styled-components';

const MaterialMultipleStopSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,4l4,4l-4,4V9h-4V7h4V4z M7,17h4v-2H7v-3l-4,4l4,4V17z M19,15h-2v2h2V15z M15,15h-2v2h2V15z M11,7H9v2h2V7z M7,7H5v2h2 V7z"
})));

const MaterialMultipleStopSharp = (styled.default || styled)(MaterialMultipleStopSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialMultipleStopSharp;
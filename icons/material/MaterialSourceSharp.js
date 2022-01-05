import React from 'react';
import styled from 'styled-components';

const MaterialSourceSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,6l-2-2H2v16h20V6H12z M14,16H6v-2h8V16z M18,12H6v-2h12V12z"
})));

const MaterialSourceSharp = (styled.default || styled)(MaterialSourceSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSourceSharp;
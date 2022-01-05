import React from 'react';
import styled from 'styled-components';

const MaterialTwentyMpSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "3",
  width: "1.5",
  x: "14.5",
  y: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,3v18h18V3H3z M6.5,8h3V7h-3V5.5H11V9H8v1h3v1.5H6.5V8z M12.5,18.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5V18.5z M13,5.5 h4.5v6H13V5.5z M18,17h-3v1.5h-1.5v-6H18V17z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  width: "1.5",
  x: "15",
  y: "14"
}))));

const MaterialTwentyMpSharp = (styled.default || styled)(MaterialTwentyMpSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTwentyMpSharp;
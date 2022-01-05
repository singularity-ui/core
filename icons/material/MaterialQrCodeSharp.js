import React from 'react';
import styled from 'styled-components';

const MaterialQrCodeSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3,11h8V3H3V11z M5,5h4v4H5V5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,21h8v-8H3V21z M5,15h4v4H5V15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,3v8h8V3H13z M19,9h-4V5h4V9z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "19",
  y: "19"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "13",
  y: "13"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "15",
  y: "15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "13",
  y: "17"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "15",
  y: "19"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "17",
  y: "17"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "17",
  y: "13"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "19",
  y: "15"
}))));

const MaterialQrCodeSharp = (styled.default || styled)(MaterialQrCodeSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialQrCodeSharp;
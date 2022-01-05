import React from 'react';
import styled from 'styled-components';

const MaterialGridViewTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  height: "4",
  opacity: ".3",
  width: "4",
  x: "5",
  y: "5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  opacity: ".3",
  width: "4",
  x: "5",
  y: "15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  opacity: ".3",
  width: "4",
  x: "15",
  y: "15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  opacity: ".3",
  width: "4",
  x: "15",
  y: "5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,21h8v-8H3V21z M5,15h4v4H5V15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,11h8V3H3V11z M5,5h4v4H5V5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,21h8v-8h-8V21z M15,15h4v4h-4V15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,3v8h8V3H13z M19,9h-4V5h4V9z"
}))));

const MaterialGridViewTwoTone = (styled.default || styled)(MaterialGridViewTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialGridViewTwoTone;
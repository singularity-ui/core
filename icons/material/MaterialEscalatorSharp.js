import React from 'react';
import styled from 'styled-components';

const MaterialEscalatorSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,3H3v18h18L21,3z M18.5,9h-3.2l-5,9H5.5v-3h3.2l5-9h4.8V9z"
}))));

const MaterialEscalatorSharp = (styled.default || styled)(MaterialEscalatorSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialEscalatorSharp;
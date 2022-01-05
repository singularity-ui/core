import React from 'react';
import styled from 'styled-components';

const MaterialSixtyFpsSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,8v8h-4V8H19 M22,5H12v14h10V5z M10,8V5H2v14h9v-9H5V8H10z M8,13v3H5v-3H8z"
}))));

const MaterialSixtyFpsSharp = (styled.default || styled)(MaterialSixtyFpsSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSixtyFpsSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialAutoAwesomeMotionSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M14,2H2v12h2V4h10V2z M18,6H6v12h2V8h10V6z M22,10H10v12h12V10z"
}))));

const MaterialAutoAwesomeMotionSharp = (styled.default || styled)(MaterialAutoAwesomeMotionSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAutoAwesomeMotionSharp;
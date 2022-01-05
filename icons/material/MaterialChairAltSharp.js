import React from 'react';
import styled from 'styled-components';

const MaterialChairAltSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16,10h3V3H5v7h3v2H5v9h2v-3h10v3h2v-9h-3V10z M7,8V5h10v3H7z M17,16H7v-2h10V16z M14,12h-4v-2h4V12z"
})));

const MaterialChairAltSharp = (styled.default || styled)(MaterialChairAltSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialChairAltSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialDesktopMacSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 2H1v16h9l-2 3v1h8v-1l-2-3h9V2zm-2 12H3V4h18v10z"
}));

const MaterialDesktopMacSharp = (styled.default || styled)(MaterialDesktopMacSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDesktopMacSharp;
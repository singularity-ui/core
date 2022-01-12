import React from 'react';
import styled from 'styled-components';

const MaterialSdCardAlertSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 2H10L4 8v14h16V2zm-7 15h-2v-2h2v2zm0-4h-2V8h2v5z"
}));

const MaterialSdCardAlertSharp = (styled.default || styled)(MaterialSdCardAlertSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSdCardAlertSharp;
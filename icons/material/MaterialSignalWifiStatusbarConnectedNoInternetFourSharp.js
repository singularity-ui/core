import React from 'react';
import styled from 'styled-components';

const MaterialSignalWifiStatusbarConnectedNoInternetFourSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "19",
  y: "18"
}), /*#__PURE__*/React.createElement("rect", {
  height: "6",
  width: "2",
  x: "19",
  y: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,4C7.31,4,3.07,5.9,0,8.98L12,21l5-5.01V8h5.92C19.97,5.51,16.16,4,12,4z"
}))));

const MaterialSignalWifiStatusbarConnectedNoInternetFourSharp = (styled.default || styled)(MaterialSignalWifiStatusbarConnectedNoInternetFourSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSignalWifiStatusbarConnectedNoInternetFourSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialSignalCellularConnectedNoInternet_0BarRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,18L21,18c0.55,0,1-0.45,1-1v-6c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v6C20,17.55,20.45,18,21,18z M21,22L21,22 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C20,21.55,20.45,22,21,22z M18,20v2H2L22,2v6h-2V6.83L6.83,20H18z"
}));

const MaterialSignalCellularConnectedNoInternet_0BarRounded = (styled.default || styled)(MaterialSignalCellularConnectedNoInternet_0BarRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSignalCellularConnectedNoInternet_0BarRounded;
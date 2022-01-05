import React from 'react';
import styled from 'styled-components';

const MaterialBrunchDiningRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,8h2V4h-2V8z M15,22H3c-0.55,0-1-0.45-1-1v-1h14v1C16,21.55,15.55,22,15,22z M18,15.89l-0.4-0.42 c-1.03-1.08-1.6-2.51-1.6-4V3c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v8.51c0,1.46-0.54,2.87-1.53,3.94L20,15.97V20h1 c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1h-2c-0.55,0-1-0.45-1-1V15.89z M7,16v-1c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v1h4 c0.55,0,1,0.45,1,1v1H2v-1c0-0.55,0.45-1,1-1H7z"
}))));

const MaterialBrunchDiningRounded = (styled.default || styled)(MaterialBrunchDiningRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBrunchDiningRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialBrunchDiningSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M18,8h2V4h-2V8z M16,22H2v-2h14V22z M18,15.89l-0.4-0.42c-1.02-1.08-1.6-2.52-1.6-4V2h6v9.51c0,1.46-0.54,2.87-1.53,3.94 L20,15.97V20h2v2h-4V15.89z M7,16v-2h4v2h5v2H2v-2H7z"
}))));

const MaterialBrunchDiningSharp = (styled.default || styled)(MaterialBrunchDiningSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBrunchDiningSharp;
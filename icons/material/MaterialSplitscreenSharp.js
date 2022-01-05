import React from 'react';
import styled from 'styled-components';

const MaterialSplitscreenSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,4v5H6V4H18 M20,2H4v9h16V2z M18,15v5H6v-5H18 M20,13H4v9h16V13z"
}))));

const MaterialSplitscreenSharp = (styled.default || styled)(MaterialSplitscreenSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSplitscreenSharp;
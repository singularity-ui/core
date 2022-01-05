import React from 'react';
import styled from 'styled-components';

const MaterialFormatItalicTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z"
}));

const MaterialFormatItalicTwoTone = (styled.default || styled)(MaterialFormatItalicTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFormatItalicTwoTone;
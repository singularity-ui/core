import React from 'react';
import styled from 'styled-components';

const MaterialSkipPreviousTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 14.14V9.86L12.97 12z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 6h2v12H6zm12 12V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z"
}));

const MaterialSkipPreviousTwoTone = (styled.default || styled)(MaterialSkipPreviousTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSkipPreviousTwoTone;
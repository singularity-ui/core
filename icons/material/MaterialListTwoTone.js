import React from 'react';
import styled from 'styled-components';

const MaterialListTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", {
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  opacity: ".87"
})), /*#__PURE__*/React.createElement("path", {
  d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
}));

const MaterialListTwoTone = (styled.default || styled)(MaterialListTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialListTwoTone;
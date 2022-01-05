import React from 'react';
import styled from 'styled-components';

const MaterialFilterSevenTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 17h14V3H7v14zm4-10V5h6v2l-4 8h-2l4-8h-4z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zm10-8l4-8V5h-6v2h4l-4 8zm8-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"
}));

const MaterialFilterSevenTwoTone = (styled.default || styled)(MaterialFilterSevenTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFilterSevenTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialStopTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 8h8v8H8z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 18h12V6H6v12zM8 8h8v8H8V8z"
}));

const MaterialStopTwoTone = (styled.default || styled)(MaterialStopTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialStopTwoTone;
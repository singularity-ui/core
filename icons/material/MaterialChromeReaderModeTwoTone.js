import React from 'react';
import styled from 'styled-components';

const MaterialChromeReaderModeTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 6h8v13H3z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM11 19H3V6h8v13zm10 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"
}));

const MaterialChromeReaderModeTwoTone = (styled.default || styled)(MaterialChromeReaderModeTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialChromeReaderModeTwoTone;
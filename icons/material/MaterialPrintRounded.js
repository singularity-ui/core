import React from 'react';
import styled from 'styled-components';

const MaterialPrintRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 8H5c-1.66 0-3 1.34-3 3v4c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2v-4c0-1.66-1.34-3-3-3zm-4 11H9c-.55 0-1-.45-1-1v-4h8v4c0 .55-.45 1-1 1zm4-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2-9H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"
}));

const MaterialPrintRounded = (styled.default || styled)(MaterialPrintRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPrintRounded;
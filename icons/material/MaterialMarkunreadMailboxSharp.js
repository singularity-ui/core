import React from 'react';
import styled from 'styled-components';

const MaterialMarkunreadMailboxSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 6H10v6H8V4h6V0H6v6H2v16h20V6z"
}));

const MaterialMarkunreadMailboxSharp = (styled.default || styled)(MaterialMarkunreadMailboxSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialMarkunreadMailboxSharp;
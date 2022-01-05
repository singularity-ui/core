import React from 'react';
import styled from 'styled-components';

const MaterialNotesSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"
}));

const MaterialNotesSharp = (styled.default || styled)(MaterialNotesSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNotesSharp;
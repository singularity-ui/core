import React from 'react';
import styled from 'styled-components';

const MaterialNoteSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 10l-6-6H2v16h20V10zm-7-4.5l5.5 5.5H15V5.5z"
}));

const MaterialNoteSharp = (styled.default || styled)(MaterialNoteSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNoteSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialFolderOpenSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 6H12l-2-2H2v16h20V6zm-2 12H4V8h16v10z"
}));

const MaterialFolderOpenSharp = (styled.default || styled)(MaterialFolderOpenSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFolderOpenSharp;
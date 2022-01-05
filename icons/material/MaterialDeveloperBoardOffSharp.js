import React from 'react';
import styled from 'styled-components';

const MaterialDeveloperBoardOffSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.83,5H18v10.17L19.83,17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V3H5.83L7.83,5z M12,9.17V7h4v3h-3.17L12,9.17z M9.83,7H11v1.17 L9.83,7z M13.83,11H16v2.17L13.83,11z M18.17,21l2.31,2.31l1.41-1.41L2.1,2.1L0.69,3.51L2,4.83V21H18.17z M4,19V6.83l2,2V12h3.17 l1,1H6v4h5v-3.17l1,1V17h2.17l2,2H4z"
}));

const MaterialDeveloperBoardOffSharp = (styled.default || styled)(MaterialDeveloperBoardOffSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDeveloperBoardOffSharp;
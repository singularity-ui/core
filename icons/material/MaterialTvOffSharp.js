import React from 'react';
import styled from 'styled-components';

const MaterialTvOffSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 7v10.88l2 2V5h-9.58l3.29-3.3L16 1l-4 4-4-4-.7.7L10.58 5H8.12l2 2zM2.41 2.13l-.14.14L1 3.54l1.53 1.53H1V21h17.46l1.99 1.99 1.26-1.26.15-.15L2.41 2.13zM3 19V7h1.46l12 12H3z"
}));

const MaterialTvOffSharp = (styled.default || styled)(MaterialTvOffSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTvOffSharp;
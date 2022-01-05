import React from 'react';
import styled from 'styled-components';

const MaterialAlignHorizontalLeftSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M4,22H2V2h2V22z M22,7H6v3h16V7z M16,14H6v3h10V14z"
}));

const MaterialAlignHorizontalLeft = (styled.default || styled)(MaterialAlignHorizontalLeftSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAlignHorizontalLeft;
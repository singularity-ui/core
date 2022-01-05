import React from 'react';
import styled from 'styled-components';

const MaterialDragHandleSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z"
}));

const MaterialDragHandleSharp = (styled.default || styled)(MaterialDragHandleSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDragHandleSharp;
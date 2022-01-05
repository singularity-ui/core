import React from 'react';
import styled from 'styled-components';

const MaterialVerticalAlignBottomSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"
}));

const MaterialVerticalAlignBottomSharp = (styled.default || styled)(MaterialVerticalAlignBottomSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialVerticalAlignBottomSharp;
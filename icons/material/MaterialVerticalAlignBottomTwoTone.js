import React from 'react';
import styled from 'styled-components';

const MaterialVerticalAlignBottomTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z"
}));

const MaterialVerticalAlignBottomTwoTone = (styled.default || styled)(MaterialVerticalAlignBottomTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialVerticalAlignBottomTwoTone;
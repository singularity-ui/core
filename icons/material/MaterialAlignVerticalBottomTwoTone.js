import React from 'react';
import styled from 'styled-components';

const MaterialAlignVerticalBottomTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z"
}));

const MaterialAlignVerticalBottomTwoTone = (styled.default || styled)(MaterialAlignVerticalBottomTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAlignVerticalBottomTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialFormatAlignCenterTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z"
}));

const MaterialFormatAlignCenterTwoTone = (styled.default || styled)(MaterialFormatAlignCenterTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFormatAlignCenterTwoTone;
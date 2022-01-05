import React from 'react';
import styled from 'styled-components';

const MaterialAlignHorizontalCenterTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "11,2 13,2 13,7 21,7 21,10 13,10 13,14 18,14 18,17 13,17 13,22 11,22 11,17 6,17 6,14 11,14 11,10 3,10 3,7 11,7"
}));

const MaterialAlignHorizontalCenterTwoTone = (styled.default || styled)(MaterialAlignHorizontalCenterTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAlignHorizontalCenterTwoTone;
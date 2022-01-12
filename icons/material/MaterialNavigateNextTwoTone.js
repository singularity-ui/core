import React from 'react';
import styled from 'styled-components';

const MaterialNavigateNextTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.02 18l6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z"
}));

const MaterialNavigateNextTwoTone = (styled.default || styled)(MaterialNavigateNextTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNavigateNextTwoTone;
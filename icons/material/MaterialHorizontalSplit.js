import React from 'react';
import styled from 'styled-components';

const MaterialHorizontalSplitSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z"
}));

const MaterialHorizontalSplit = (styled.default || styled)(MaterialHorizontalSplitSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialHorizontalSplit;
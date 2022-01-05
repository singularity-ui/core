import React from 'react';
import styled from 'styled-components';

const MaterialHorizontalSplitTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 15h14v2H5z",
  opacity: ".3"
}));

const MaterialHorizontalSplitTwoTone = (styled.default || styled)(MaterialHorizontalSplitTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialHorizontalSplitTwoTone;
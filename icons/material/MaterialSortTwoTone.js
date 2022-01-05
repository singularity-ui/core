import React from 'react';
import styled from 'styled-components';

const MaterialSortTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
}));

const MaterialSortTwoTone = (styled.default || styled)(MaterialSortTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSortTwoTone;
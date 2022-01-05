import React from 'react';
import styled from 'styled-components';

const MaterialDehazeTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"
}));

const MaterialDehazeTwoTone = (styled.default || styled)(MaterialDehazeTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDehazeTwoTone;
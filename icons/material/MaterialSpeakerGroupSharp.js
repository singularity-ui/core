import React from 'react';
import styled from 'styled-components';

const MaterialSpeakerGroupSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 1H8v17.99h12V1zm-6 2c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "12.5",
  r: "2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 5H4v18h12v-2H6z"
}));

const MaterialSpeakerGroupSharp = (styled.default || styled)(MaterialSpeakerGroupSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSpeakerGroupSharp;
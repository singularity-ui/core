import React from 'react';
import styled from 'styled-components';

const MaterialAirlineSeatIndividualSuiteTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7",
  cy: "11",
  opacity: ".3",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 9h-6v6h8v-4c0-1.1-.9-2-2-2z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V7H1v10h22v-6c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z"
}));

const MaterialAirlineSeatIndividualSuiteTwoTone = (styled.default || styled)(MaterialAirlineSeatIndividualSuiteTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAirlineSeatIndividualSuiteTwoTone;
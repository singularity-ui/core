import React from 'react';
import styled from 'styled-components';

const MaterialBabyChangingStationSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14,8v2h-3L8.31,8.82L7,12.75V22H3V12l1.58-4.63C4.86,6.53,5.63,6.01,6.46,6C6.74,6,7.02,6.05,7.3,6.18l4.15,1.83L14,8z M8,1C6.9,1,6,1.9,6,3s0.9,2,2,2s2-0.9,2-2S9.1,1,8,1z M9,19h12v-2H9V19z M19.5,16c0.83,0,1.5-0.67,1.5-1.5 c0-0.83-0.67-1.5-1.5-1.5S18,13.67,18,14.5C18,15.33,18.67,16,19.5,16z M13,13v-2H9v2h2v3h6v-5h-2v2H13z"
})));

const MaterialBabyChangingStationSharp = (styled.default || styled)(MaterialBabyChangingStationSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBabyChangingStationSharp;
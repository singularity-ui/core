import React from 'react';
import styled from 'styled-components';

const MaterialGridFourxfourRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M22,6L22,6c0-0.55-0.45-1-1-1h-2V3c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2h-4V3c0-0.55-0.45-1-1-1h0 c-0.55,0-1,0.45-1,1v2H7V3c0-0.55-0.45-1-1-1h0C5.45,2,5,2.45,5,3v2H3C2.45,5,2,5.45,2,6v0c0,0.55,0.45,1,1,1h2v4H3 c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2v4H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1v-2h4v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h4v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h2 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2v-4h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2V7h2C21.55,7,22,6.55,22,6z M7,7h4v4H7 V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"
}))));

const MaterialGridFourxfourRounded = (styled.default || styled)(MaterialGridFourxfourRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialGridFourxfourRounded;
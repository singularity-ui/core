import React from 'react';
import styled from 'styled-components';

const MaterialNightlightRoundRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M15.5,22c0.07,0,0.14,0,0.21,0c0.84-0.02,1.12-1.11,0.41-1.56c-2.78-1.77-4.63-4.89-4.63-8.43c0-3.55,1.85-6.66,4.63-8.44 c0.7-0.45,0.44-1.54-0.39-1.56c-0.04,0-0.09,0-0.13,0c-4.9-0.05-9.21,3.53-9.98,8.37C4.64,16.61,9.45,22,15.5,22L15.5,22z"
}))));

const MaterialNightlightRoundRounded = (styled.default || styled)(MaterialNightlightRoundRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNightlightRoundRounded;
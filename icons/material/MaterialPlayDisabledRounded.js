import React from 'react';
import styled from 'styled-components';

const MaterialPlayDisabledRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M2.1,3.51L2.1,3.51c-0.39,0.39-0.39,1.02,0,1.41l5.9,5.9v6.35c0,0.79,0.87,1.27,1.54,0.84l3.45-2.2l6.08,6.08 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51C3.12,3.12,2.49,3.12,2.1,3.51z M17.68,12.84 c0.62-0.39,0.62-1.29,0-1.69L9.54,5.98C9.27,5.81,8.97,5.79,8.7,5.87l7.75,7.75L17.68,12.84z"
})));

const MaterialPlayDisabledRounded = (styled.default || styled)(MaterialPlayDisabledRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPlayDisabledRounded;
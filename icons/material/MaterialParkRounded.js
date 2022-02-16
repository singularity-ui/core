import React from 'react';
import styled from 'styled-components';

const MaterialParkRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16.96,12h0.08c0.81,0,1.28-0.91,0.82-1.57l-5.08-7.25c-0.4-0.57-1.24-0.57-1.64,0L6.1,10.43C5.64,11.09,6.12,12,6.93,12 h0.04l-2.9,4.46C3.63,17.12,4.11,18,4.91,18h5.08v2.02c0,1.09,0.89,1.98,1.98,1.98h0c1.09,0,1.98-0.89,1.98-1.98V18h5.15 c0.8,0,1.28-0.89,0.83-1.55L16.96,12z"
})))));

const MaterialParkRounded = (styled.default || styled)(MaterialParkRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialParkRounded;
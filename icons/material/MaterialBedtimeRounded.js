import React from 'react';
import styled from 'styled-components';

const MaterialBedtimeRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M11.97,2.73c0.16-0.34-0.12-0.72-0.5-0.7C5.47,2.33,1,7.86,2.19,13.99c0.78,4.03,4.09,7.22,8.14,7.87 c4.07,0.66,7.77-1.14,9.87-4.15c0.21-0.31,0.04-0.75-0.33-0.79C13.13,16.16,9,8.96,11.97,2.73z"
}))));

const MaterialBedtimeRounded = (styled.default || styled)(MaterialBedtimeRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBedtimeRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialHeadphonesRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M3,12v7c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2H5v-1c0-3.87,3.13-7,7-7s7,3.13,7,7v1h-2c-1.1,0-2,0.9-2,2v4 c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-7c0-4.97-4.03-9-9-9S3,7.03,3,12z"
})));

const MaterialHeadphonesRounded = (styled.default || styled)(MaterialHeadphonesRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialHeadphonesRounded;
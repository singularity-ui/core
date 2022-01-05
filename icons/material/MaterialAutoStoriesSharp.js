import React from 'react';
import styled from 'styled-components';

const MaterialAutoStoriesSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,4.6v2.12v7.24v2.66C19.86,16.21,18.69,16,17.5,16c-1.9,0-3.78,0.54-5.5,1.58v-3.62V7.79V5.48C10.38,4.55,8.51,4,6.5,4 S2.62,4.55,1,5.48V20c1.52-1.18,3.43-2,5.5-2s3.98,0.82,5.5,2c1.52-1.18,3.43-2,5.5-2s3.98,0.82,5.5,2V5.48 C22.37,5.12,21.7,4.84,21,4.6z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "19,0.5 14,5.5 14,15 19,10.5"
})));

const MaterialAutoStoriesSharp = (styled.default || styled)(MaterialAutoStoriesSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAutoStoriesSharp;
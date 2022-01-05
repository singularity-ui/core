import React from 'react';
import styled from 'styled-components';

const MaterialPanoramaWideAngleSelectTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,4C8.03,4,5.15,4.63,3,5c-0.55,1.97-1,3.92-1,7c0,3.03,0.45,5.05,1,7c2.15,0.37,4.98,1,9,1c3.97,0,6.85-0.63,9-1 c0.57-2.02,1-3.99,1-7c0-3.03-0.45-5.05-1-7C18.85,4.63,16.02,4,12,4z"
})))));

const MaterialPanoramaWideAngleSelectTwoTone = (styled.default || styled)(MaterialPanoramaWideAngleSelectTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPanoramaWideAngleSelectTwoTone;
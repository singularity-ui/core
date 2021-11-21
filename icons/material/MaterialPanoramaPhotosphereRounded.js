import React from 'react';
import styled from 'styled-components';

const MaterialPanoramaPhotosphereRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.95,8.15c-0.29-0.16-0.61-0.31-0.93-0.46C19.4,4.33,15.98,2,12,2C8.02,2,4.6,4.33,2.99,7.68 c-0.33,0.15-0.64,0.3-0.93,0.46C1.41,8.5,1,9.17,1,9.91v4.18c0,0.74,0.41,1.41,1.05,1.77c0.29,0.16,0.61,0.31,0.93,0.46 C4.6,19.67,8.02,22,12,22c3.98,0,7.4-2.33,9.01-5.68c0.33-0.15,0.64-0.3,0.93-0.46C22.59,15.5,23,14.83,23,14.09V9.91 C23,9.17,22.59,8.5,21.95,8.15z M12,4c2.37,0,4.49,1.04,5.95,2.68C16.17,6.25,14.15,6,12,6C9.85,6,7.83,6.25,6.05,6.68 C7.51,5.04,9.63,4,12,4z M12,20c-2.37,0-4.49-1.04-5.95-2.68C7.83,17.75,9.85,18,12,18s4.17-0.25,5.95-0.68 C16.49,18.96,14.37,20,12,20z"
}))));

const MaterialPanoramaPhotosphereRounded = (styled.default || styled)(MaterialPanoramaPhotosphereRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPanoramaPhotosphereRounded;
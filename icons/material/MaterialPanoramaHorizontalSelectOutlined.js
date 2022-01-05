import React from 'react';
import styled from 'styled-components';

const MaterialPanoramaHorizontalSelectOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,5.5c-3.89,0-6.95-0.84-8.69-1.43C2.67,3.85,2,4.33,2,5.02L2,19c0,0.68,0.66,1.17,1.31,0.95 C5.36,19.26,8.1,18.5,12,18.5c3.87,0,6.66,0.76,8.69,1.45C21.34,20.16,22,19.68,22,19l0-14c0-0.68-0.66-1.17-1.31-0.95 C18.66,4.73,15.86,5.5,12,5.5z"
})));

const MaterialPanoramaHorizontalSelectOutlined = (styled.default || styled)(MaterialPanoramaHorizontalSelectOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPanoramaHorizontalSelectOutlined;
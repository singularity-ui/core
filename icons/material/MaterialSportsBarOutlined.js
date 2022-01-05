import React from 'react';
import styled from 'styled-components';

const MaterialSportsBarOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15,19H8l0-6.63c1.26-0.34,2.11-1.27,2.77-1.99C11.6,9.47,12.08,9,13,9l2,0V19z M10,2.02c-1.89,0-3.51,1.11-4.27,2.71 C4.15,5.26,3,6.74,3,8.5c0,1.86,1.28,3.41,3,3.86L6,21h11v-2h2c1.1,0,2-0.9,2-2v-6c0-1.1-0.9-2-2-2h-1.56C17.79,8.41,18,7.73,18,7 c0-2.21-1.79-4-4-4c-0.34,0-0.66,0.05-0.98,0.13C12.2,2.45,11.16,2.02,10,2.02L10,2.02z M7,10.5c-1.1,0-2-0.9-2-2 c0-0.85,0.55-1.6,1.37-1.88l0.8-0.27l0.36-0.76C8,4.62,8.94,4.02,10,4.02c0.79,0,1.39,0.35,1.74,0.65l0.78,0.65 c0,0,0.64-0.32,1.47-0.32c1.1,0,2,0.9,2,2c0,0-3,0-3,0C9.67,7,9.15,10.5,7,10.5C7,10.5,7,10.5,7,10.5L7,10.5z M17,17v-6h2v6H17 L17,17z"
}));

const MaterialSportsBarOutlined = (styled.default || styled)(MaterialSportsBarOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSportsBarOutlined;
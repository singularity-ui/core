import React from 'react';
import styled from 'styled-components';

const MaterialPersonPinCircleRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.22c0.36,0.32,0.97,0.32,1.33,0C17.55,17.12,20,13.38,20,10.2 C20,5.22,16.2,2,12,2z M7.69,12.49C8.88,11.56,10.37,11,12,11s3.12,0.56,4.31,1.49C15.45,13.98,13.85,15,12,15 S8.55,13.98,7.69,12.49z M12,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2s-2-0.9-2-2C10,6.9,10.9,6,12,6z"
})));

const MaterialPersonPinCircleRounded = (styled.default || styled)(MaterialPersonPinCircleRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPersonPinCircleRounded;
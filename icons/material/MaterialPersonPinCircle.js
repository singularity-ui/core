import React from 'react';
import styled from 'styled-components';

const MaterialPersonPinCircleSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,2C8.14,2,5,5.14,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.14,15.86,2,12,2z M12,4c1.1,0,2,0.9,2,2c0,1.11-0.9,2-2,2 s-2-0.89-2-2C10,4.9,10.9,4,12,4z M12,14c-1.67,0-3.14-0.85-4-2.15c0.02-1.32,2.67-2.05,4-2.05s3.98,0.73,4,2.05 C15.14,13.15,13.67,14,12,14z"
})))));

const MaterialPersonPinCircle = (styled.default || styled)(MaterialPersonPinCircleSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPersonPinCircle;
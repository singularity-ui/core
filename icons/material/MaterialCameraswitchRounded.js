import React from 'react';
import styled from 'styled-components';

const MaterialCameraswitchRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16,7h-1l-1-1h-4L9,7H8C6.9,7,6,7.9,6,9v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V9C18,7.9,17.1,7,16,7z M12,14 c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C14,13.1,13.1,14,12,14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.45,0.28C9.05,0.36,8.9,0.84,9.19,1.12l3.01,3.01c0.32,0.31,0.85,0.09,0.85-0.35V2.04c4.45,0.44,8.06,3.82,8.84,8.17 c0.08,0.46,0.5,0.78,0.97,0.78c0.62,0,1.09-0.57,0.98-1.18C22.61,2.89,15.79-1.12,9.45,0.28z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.8,19.87c-0.32-0.32-0.85-0.09-0.85,0.35v1.74c-4.45-0.44-8.06-3.82-8.84-8.17c-0.08-0.46-0.5-0.78-0.97-0.78 c-0.62,0-1.09,0.57-0.98,1.18c1.24,6.92,8.06,10.93,14.4,9.53c0.39-0.09,0.55-0.56,0.26-0.85L11.8,19.87z"
}))));

const MaterialCameraswitchRounded = (styled.default || styled)(MaterialCameraswitchRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCameraswitchRounded;
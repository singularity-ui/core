import React from 'react';
import styled from 'styled-components';

const MaterialCameraswitchSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
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
  d: "M8.57,0.51l4.48,4.48V2.04c4.72,0.47,8.48,4.23,8.95,8.95c0,0,2,0,2,0C23.34,3.02,15.49-1.59,8.57,0.51z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.95,21.96C6.23,21.49,2.47,17.73,2,13.01c0,0-2,0-2,0c0.66,7.97,8.51,12.58,15.43,10.48l-4.48-4.48V21.96z"
}))));

const MaterialCameraswitch = (styled.default || styled)(MaterialCameraswitchSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCameraswitch;
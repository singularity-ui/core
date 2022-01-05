import React from 'react';
import styled from 'styled-components';

const MaterialScreenSearchDesktopOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M4,18h16c1.1,0,1.99-0.9,1.99-2L22,5c0-1.1-0.9-2-2-2H4C2.9,3,2,3.9,2,5v11C2,17.1,2.9,18,4,18z M4,5h16v11H4V5z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "22",
  x: "1",
  y: "19"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.97,7.53c-1.37-1.37-3.58-1.37-4.95,0s-1.37,3.58,0,4.95c1.18,1.18,3,1.34,4.36,0.47l2.09,2.09l1.06-1.06l-2.09-2.09 C15.31,10.53,15.16,8.71,13.97,7.53z M12.91,11.41c-0.78,0.78-2.05,0.78-2.83,0c-0.78-0.78-0.78-2.05,0-2.83s2.05-0.78,2.83,0 C13.69,9.37,13.69,10.63,12.91,11.41z"
}))));

const MaterialScreenSearchDesktopOutlined = (styled.default || styled)(MaterialScreenSearchDesktopOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialScreenSearchDesktopOutlined;
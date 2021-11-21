import React from 'react';
import styled from 'styled-components';

const MaterialHomeMiniTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,7c-7.91,0-8,4.8-8,5h16C19.99,11.51,19.64,7,12,7z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.14,17h5.72c2.1,0,3.92-1.24,4.71-3H4.42C5.22,15.76,7.04,17,9.14,17z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,5C4.19,5,2,9.48,2,12c0,3.86,3.13,7,6.99,7h6.02c2.69,0,6.99-2.08,6.99-7C22,12,22,5,12,5z M14.86,17H9.14 c-2.1,0-3.92-1.24-4.71-3h15.15C18.78,15.76,16.96,17,14.86,17z M4,12c0-0.2,0.09-5,8-5c7.64,0,7.99,4.51,8,5H4z"
}))));

const MaterialHomeMiniTwoTone = (styled.default || styled)(MaterialHomeMiniTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHomeMiniTwoTone;
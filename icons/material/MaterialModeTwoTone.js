import React from 'react';
import styled from 'styled-components';

const MaterialModeTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.06 9.02L5 18.08V19h.92l9.06-9.06z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.37 3.29c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34zm-.56 6.65l-3.75-3.75L3 17.25V21h3.75L17.81 9.94zM5 19v-.92l9.06-9.06.92.92L5.92 19H5z"
}));

const MaterialModeTwoTone = (styled.default || styled)(MaterialModeTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialModeTwoTone;
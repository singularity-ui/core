import React from 'react';
import styled from 'styled-components';

const MaterialSwitchCameraTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.12 4H9.88L8.05 6H4v12h16V6h-4.05l-1.83-2zM15 15.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zm-5-7H9V8.5L5.5 12 9 15.5V13h6v2.5l3.5-3.5L15 8.5z"
}));

const MaterialSwitchCameraTwoTone = (styled.default || styled)(MaterialSwitchCameraTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSwitchCameraTwoTone;
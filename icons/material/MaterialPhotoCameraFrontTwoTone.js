import React from 'react';
import styled from 'styled-components';

const MaterialPhotoCameraFrontTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M15.95,7l-1.83-2H9.88L8.05,7H4v12h16V7H15.95z M12,9c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2s-2-0.9-2-2 C10,9.9,10.9,9,12,9z M16,17H8v-0.57c0-0.81,0.48-1.53,1.22-1.85C10.07,14.21,11.01,14,12,14s1.93,0.21,2.78,0.58 C15.52,14.9,16,15.62,16,16.43V17z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,5h-3.17L15,3H9L7.17,5H4C2.9,5,2,5.9,2,7v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M20,19H4V7 h4.05l1.83-2h4.24l1.83,2H20V19z M12,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C10,12.1,10.9,13,12,13z M14.78,14.58 C13.93,14.21,12.99,14,12,14s-1.93,0.21-2.78,0.58C8.48,14.9,8,15.62,8,16.43V17h8v-0.57C16,15.62,15.52,14.9,14.78,14.58z"
}))));

const MaterialPhotoCameraFrontTwoTone = (styled.default || styled)(MaterialPhotoCameraFrontTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPhotoCameraFrontTwoTone;
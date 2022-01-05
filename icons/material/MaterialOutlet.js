import React from 'react';
import styled from 'styled-components';

const MaterialOutletSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M9,12c-0.55,0-1-0.45-1-1V8 c0-0.55,0.45-1,1-1s1,0.45,1,1v3C10,11.55,9.55,12,9,12z M14,18h-4v-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2V18z M16,11 c0,0.55-0.45,1-1,1c-0.55,0-1-0.45-1-1V8c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1V11z"
}));

const MaterialOutlet = (styled.default || styled)(MaterialOutletSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialOutlet;
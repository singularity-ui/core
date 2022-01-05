import React from 'react';
import styled from 'styled-components';

const MaterialGMobiledataRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,12L12,12c0,0.55,0.45,1,1,1h1v2H9V9h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H9C7.9,7,7,7.9,7,9v6c0,1.1,0.9,2,2,2h5 c1.1,0,2-0.9,2-2v-3c0-0.55-0.45-1-1-1h-2C12.45,11,12,11.45,12,12z"
}))));

const MaterialGMobiledataRounded = (styled.default || styled)(MaterialGMobiledataRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialGMobiledataRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialNavigationRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.93 4.26l6.15 14.99c.34.83-.51 1.66-1.33 1.29l-5.34-2.36c-.26-.11-.55-.11-.81 0l-5.34 2.36c-.82.36-1.67-.46-1.33-1.29l6.15-14.99c.33-.83 1.51-.83 1.85 0z"
}));

const MaterialNavigationRounded = (styled.default || styled)(MaterialNavigationRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialNavigationRounded;
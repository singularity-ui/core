import React from 'react';
import styled from 'styled-components';

const MaterialCalendarViewDayRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,7h14c1.1,0,2,0.9,2,2v6c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V9C3,7.9,3.9,7,5,7z M4,3h16c0.55,0,1,0.45,1,1v0 c0,0.55-0.45,1-1,1H4C3.45,5,3,4.55,3,4v0C3,3.45,3.45,3,4,3z M4,19h16c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1 v0C3,19.45,3.45,19,4,19z"
}));

const MaterialCalendarViewDayRounded = (styled.default || styled)(MaterialCalendarViewDayRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCalendarViewDayRounded;
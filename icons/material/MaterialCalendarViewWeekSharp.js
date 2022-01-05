import React from 'react';
import styled from 'styled-components';

const MaterialCalendarViewWeekSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M22,4H2v16h20V4z M13,6h2.5v12H13V6z M11,18H8.5V6H11V18z M4,6h2.5v12H4V6z M20,18h-2.5V6H20V18z"
})));

const MaterialCalendarViewWeekSharp = (styled.default || styled)(MaterialCalendarViewWeekSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCalendarViewWeekSharp;
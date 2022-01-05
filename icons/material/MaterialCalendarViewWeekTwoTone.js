import React from 'react';
import styled from 'styled-components';

const MaterialCalendarViewWeekTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "12",
  opacity: ".3",
  width: "2.5",
  x: "8.5",
  y: "6"
}), /*#__PURE__*/React.createElement("rect", {
  height: "12",
  opacity: ".3",
  width: "2.5",
  x: "13",
  y: "6"
}), /*#__PURE__*/React.createElement("rect", {
  height: "12",
  opacity: ".3",
  width: "2.5",
  x: "4",
  y: "6"
}), /*#__PURE__*/React.createElement("rect", {
  height: "12",
  opacity: ".3",
  width: "2.5",
  x: "17.5",
  y: "6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M6.5,18H4V6h2.5V18z M11,18H8.5V6 H11V18z M15.5,18H13V6h2.5V18z M20,18h-2.5V6H20V18z"
}))));

const MaterialCalendarViewWeekTwoTone = (styled.default || styled)(MaterialCalendarViewWeekTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCalendarViewWeekTwoTone;
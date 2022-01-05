import React from 'react';
import styled from 'styled-components';

const MaterialCalendarViewDaySharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z"
}));

const MaterialCalendarViewDaySharp = (styled.default || styled)(MaterialCalendarViewDaySharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCalendarViewDaySharp;
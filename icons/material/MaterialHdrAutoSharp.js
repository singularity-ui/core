import React from 'react';
import styled from 'styled-components';

const MaterialHdrAutoSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "12.04,8.04 11.95,8.04 10.35,12.59 13.64,12.59"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M15.21,17l-0.98-2.81H9.78l-1,2.81h-1.9l4.13-11 h1.97l4.13,11H15.21z"
}))));

const MaterialHdrAutoSharp = (styled.default || styled)(MaterialHdrAutoSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialHdrAutoSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialHdrAutoRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M15,16.41l-0.78-2.22H9.78l-0.79,2.22 C8.87,16.76,8.53,17,8.16,17h0c-0.62,0-1.05-0.62-0.83-1.2l3.34-8.88C10.88,6.37,11.4,6,12,6h0c0.59,0,1.12,0.37,1.33,0.92 l3.34,8.88c0.22,0.58-0.21,1.2-0.83,1.2h0C15.46,17,15.12,16.76,15,16.41z"
}))));

const MaterialHdrAutoRounded = (styled.default || styled)(MaterialHdrAutoRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialHdrAutoRounded;
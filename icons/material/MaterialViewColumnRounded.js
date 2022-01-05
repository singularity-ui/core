import React from 'react';
import styled from 'styled-components';

const MaterialViewColumnRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M14.67,6v12c0,0.55-0.45,1-1,1h-3.33c-0.55,0-1-0.45-1-1V6c0-0.55,0.45-1,1-1h3.33C14.22,5,14.67,5.45,14.67,6z M16.67,19 H20c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1h-3.33c-0.55,0-1,0.45-1,1v12C15.67,18.55,16.11,19,16.67,19z M8.33,18V6 c0-0.55-0.45-1-1-1H4C3.45,5,3,5.45,3,6v12c0,0.55,0.45,1,1,1h3.33C7.89,19,8.33,18.55,8.33,18z"
})));

const MaterialViewColumnRounded = (styled.default || styled)(MaterialViewColumnRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialViewColumnRounded;
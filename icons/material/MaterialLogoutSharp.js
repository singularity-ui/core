import React from 'react';
import styled from 'styled-components';

const MaterialLogoutSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "5,5 12,5 12,3 3,3 3,21 12,21 12,19 5,19"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "21,12 17,8 17,11 9,11 9,13 17,13 17,16"
}))));

const MaterialLogoutSharp = (styled.default || styled)(MaterialLogoutSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLogoutSharp;
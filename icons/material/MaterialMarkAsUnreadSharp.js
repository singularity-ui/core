import React from 'react';
import styled from 'styled-components';

const MaterialMarkAsUnreadSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "16.23,7 20.35,7 10.5,2 2,6.21 2,17 4,17 4,7.4 10.5,4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,8v13h17V8H5z M20,12l-6.5,3.33L7,12v-2l6.5,3.33L20,10V12z"
}))));

const MaterialMarkAsUnreadSharp = (styled.default || styled)(MaterialMarkAsUnreadSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialMarkAsUnreadSharp;
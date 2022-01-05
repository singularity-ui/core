import React from 'react';
import styled from 'styled-components';

const MaterialSendToMobileSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "17,18 7,18 7,6 17,6 17,7 19,7 19,1 5,1 5,23 19,23 19,17 17,17"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "22,12 18,8 18,11 13,11 13,13 18,13 18,16"
}))));

const MaterialSendToMobileSharp = (styled.default || styled)(MaterialSendToMobileSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSendToMobileSharp;
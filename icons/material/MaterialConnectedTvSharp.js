import React from 'react';
import styled from 'styled-components';

const MaterialConnectedTvSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M8.57,16H10c0-2.76-2.24-5-5-5v1.43C6.97,12.43,8.57,14.03,8.57,16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.55,16H13c0-4.42-3.59-8-8-8v1.45C8.61,9.45,11.55,12.38,11.55,16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,14v2h2C7,14.89,6.11,14,5,14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,3H2v16h6v2h8v-2h6V3z M20,17H4V5h16V17z"
}))));

const MaterialConnectedTvSharp = (styled.default || styled)(MaterialConnectedTvSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialConnectedTvSharp;
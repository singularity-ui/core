import React from 'react';
import styled from 'styled-components';

const MaterialMonitorWeightSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,3H3v18h18V3z M14.2,11.2c-3.23,2.43-6.84-1.18-4.4-4.41C13.03,4.37,16.63,7.98,14.2,11.2z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  width: "1",
  x: "10",
  y: "8.5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  width: "1",
  x: "11.5",
  y: "8.5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  width: "1",
  x: "13",
  y: "8.5"
}))));

const MaterialMonitorWeightSharp = (styled.default || styled)(MaterialMonitorWeightSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialMonitorWeightSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialAppRegistrationSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "10",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "4",
  y: "16"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "4",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "4",
  y: "4"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "14,12.42 14,10 10,10 10,14 12.42,14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.88,11.29l-1.17-1.17c-0.16-0.16-0.42-0.16-0.58,0L18.25,11L20,12.75l0.88-0.88C21.04,11.71,21.04,11.45,20.88,11.29z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "11,18.25 11,20 12.75,20 19.42,13.33 17.67,11.58"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "16",
  y: "4"
}))));

const MaterialAppRegistration = (styled.default || styled)(MaterialAppRegistrationSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAppRegistration;
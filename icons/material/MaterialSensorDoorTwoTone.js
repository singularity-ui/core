import React from 'react';
import styled from 'styled-components';

const MaterialSensorDoorTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,4v16H6V4H18 M15.5,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5c0.83,0,1.5-0.67,1.5-1.5 S16.33,10.5,15.5,10.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,4v16H6V4H18 M18,2H6C4.9,2,4,2.9,4,4v18h16V4C20,2.9,19.1,2,18,2L18,2z M15.5,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5c0.83,0,1.5-0.67,1.5-1.5S16.33,10.5,15.5,10.5z"
})));

const MaterialSensorDoorTwoTone = (styled.default || styled)(MaterialSensorDoorTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSensorDoorTwoTone;
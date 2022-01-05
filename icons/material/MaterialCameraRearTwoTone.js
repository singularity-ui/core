import React from 'react';
import styled from 'styled-components';

const MaterialCameraRearTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 16h10V2H7v14zm4.99-13c1.1 0 2 .9 2 2C14 6.1 13.1 7 12 7c-1.11 0-2-.9-2-2s.89-2 1.99-2z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm5-18c0-1.1-.9-2-2-2H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2zm-2 14H7V2h10v14zm-5-9c1.1 0 2-.9 1.99-2 0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2z"
}));

const MaterialCameraRearTwoTone = (styled.default || styled)(MaterialCameraRearTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCameraRearTwoTone;
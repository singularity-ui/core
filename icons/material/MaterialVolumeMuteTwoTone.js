import React from 'react';
import styled from 'styled-components';

const MaterialVolumeMuteTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 13h2.83L14 15.17V8.83L11.83 11H9z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 9v6h4l5 5V4l-5 5H7zm7-.17v6.34L11.83 13H9v-2h2.83L14 8.83z"
}));

const MaterialVolumeMuteTwoTone = (styled.default || styled)(MaterialVolumeMuteTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialVolumeMuteTwoTone;
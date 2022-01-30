import React from 'react';
import styled from 'styled-components';

const MaterialVolumeMuteSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 9v6h4l5 5V4l-5 5H7z"
}));

const MaterialVolumeMute = (styled.default || styled)(MaterialVolumeMuteSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialVolumeMute;
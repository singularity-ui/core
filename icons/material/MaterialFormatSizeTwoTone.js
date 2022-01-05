import React from 'react';
import styled from 'styled-components';

const MaterialFormatSizeTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z"
}));

const MaterialFormatSizeTwoTone = (styled.default || styled)(MaterialFormatSizeTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFormatSizeTwoTone;
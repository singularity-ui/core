import React from 'react';
import styled from 'styled-components';

const MaterialQueueMusicTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "17",
  opacity: ".3",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,10h12v2H3V10z M3,14h8v2H3V14z M3,6h12v2H3V6z M17,14.18C16.69,14.07,16.35,14,16,14c-1.66,0-3,1.34-3,3s1.34,3,3,3 s3-1.34,3-3V8h3V6h-5V14.18z"
})));

const MaterialQueueMusicTwoTone = (styled.default || styled)(MaterialQueueMusicTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialQueueMusicTwoTone;
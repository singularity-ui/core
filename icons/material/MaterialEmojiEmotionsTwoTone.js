import React from 'react';
import styled from 'styled-components';

const MaterialEmojiEmotionsTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,12c0-4.42-3.58-8-8-8s-8,3.58-8,8s3.58,8,8,8S20,16.42,20,12z M8.5,8C9.33,8,10,8.67,10,9.5 S9.33,11,8.5,11S7,10.33,7,9.5S7.67,8,8.5,8z M12,18c-2.28,0-4.22-1.66-5-4h10C16.22,16.34,14.28,18,12,18z M15.5,11 c-0.83,0-1.5-0.67-1.5-1.5S14.67,8,15.5,8S17,8.67,17,9.5S16.33,11,15.5,11z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15.5",
  cy: "9.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "8.5",
  cy: "9.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12C22,6.48,17.52,2,11.99,2z M12,20 c-4.42,0-8-3.58-8-8c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,18c2.28,0,4.22-1.66,5-4H7C7.78,16.34,9.72,18,12,18z"
}))));

const MaterialEmojiEmotionsTwoTone = (styled.default || styled)(MaterialEmojiEmotionsTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialEmojiEmotionsTwoTone;
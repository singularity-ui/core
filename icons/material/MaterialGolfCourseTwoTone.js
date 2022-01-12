import React from 'react';
import styled from 'styled-components';

const MaterialGolfCourseTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "19.5",
  cy: "19.5",
  opacity: ".3",
  r: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "19.5",
  cy: "19.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z"
}));

const MaterialGolfCourseTwoTone = (styled.default || styled)(MaterialGolfCourseTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialGolfCourseTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialForwardTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 14v1.17L17.17 12 14 8.83V10H6v4z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 12l-8-8v4H4v8h8v4l8-8zM6 14v-4h8V8.83L17.17 12 14 15.17V14H6z"
}));

const MaterialForwardTwoTone = (styled.default || styled)(MaterialForwardTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialForwardTwoTone;
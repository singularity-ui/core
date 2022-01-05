import React from 'react';
import styled from 'styled-components';

const MaterialCallMissedTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 10.41l7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z"
}));

const MaterialCallMissedTwoTone = (styled.default || styled)(MaterialCallMissedTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCallMissedTwoTone;
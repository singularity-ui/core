import React from 'react';
import styled from 'styled-components';

const MaterialPlayArrowTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 8.64v6.72L15.27 12z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 19l11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z"
}));

const MaterialPlayArrowTwoTone = (styled.default || styled)(MaterialPlayArrowTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPlayArrowTwoTone;
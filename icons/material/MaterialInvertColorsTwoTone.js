import React from 'react';
import styled from 'styled-components';

const MaterialInvertColorsTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7.75,8.99C6.62,10.1,6,11.57,6,13.13C6,16.37,8.69,19,12,19l0-14.19L7.75,8.99z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.65,7.56L17.65,7.56L12,2L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87 C20,10.96,19.1,8.99,17.65,7.56z M6,13.13c0-1.56,0.62-3.03,1.75-4.14L12,4.81L12,19C8.69,19,6,16.37,6,13.13z"
}))));

const MaterialInvertColorsTwoTone = (styled.default || styled)(MaterialInvertColorsTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialInvertColorsTwoTone;
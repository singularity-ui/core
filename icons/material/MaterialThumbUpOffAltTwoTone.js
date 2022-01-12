import React from 'react';
import styled from 'styled-components';

const MaterialThumbUpOffAltTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "13.34,4.66 9,9 9,19 18,19 21,12 21,10 12.23,10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,8h-6.31l0.95-4.57l0.03-0.32c0-0.41-0.17-0.79-0.44-1.06L14.17,1L7.59,7.59C7.22,7.95,7,8.45,7,9v10c0,1.1,0.9,2,2,2 h9c0.83,0,1.54-0.5,1.84-1.22l3.02-7.05C22.95,12.5,23,12.26,23,12v-2C23,8.9,22.1,8,21,8z M21,12l-3,7H9V9l4.34-4.34L12.23,10H21 V12z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "12",
  width: "4",
  x: "1",
  y: "9"
}))));

const MaterialThumbUpOffAltTwoTone = (styled.default || styled)(MaterialThumbUpOffAltTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialThumbUpOffAltTwoTone;
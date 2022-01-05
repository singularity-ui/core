import React from 'react';
import styled from 'styled-components';

const MaterialCompressTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "16",
  x: "4",
  y: "9"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "16,4 13,4 13,1 11,1 11,4 8,4 12,8"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8,19 11,19 11,22 13,22 13,19 16,19 12,15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "16",
  x: "4",
  y: "12"
}))));

const MaterialCompressTwoTone = (styled.default || styled)(MaterialCompressTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCompressTwoTone;
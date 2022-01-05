import React from 'react';
import styled from 'styled-components';

const MaterialIosShareTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,8h-3v2h3v11H6V10h3V8H6c-1.11,0-2,0.89-2,2v11c0,1.1,0.89,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.89,19.1,8,18,8z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "11,16 13,16 13,5 16,5 12,1 8,5 11,5"
}))));

const MaterialIosShareTwoTone = (styled.default || styled)(MaterialIosShareTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialIosShareTwoTone;
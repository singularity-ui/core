import React from 'react';
import styled from 'styled-components';

const MaterialPaddingTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M5,19h14V5H5V19z M15,7h2v2h-2V7z M11,7h2v2h-2V7z M7,7h2v2H7V7z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5z M19,19H5V5h14V19z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "15",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "7",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "11",
  y: "7"
}))));

const MaterialPaddingTwoTone = (styled.default || styled)(MaterialPaddingTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPaddingTwoTone;
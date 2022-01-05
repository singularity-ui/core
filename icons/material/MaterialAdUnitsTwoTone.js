import React from 'react';
import styled from 'styled-components';

const MaterialAdUnitsTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  opacity: ".3",
  width: "10",
  x: "7",
  y: "3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  opacity: ".3",
  width: "10",
  x: "7",
  y: "20"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1L17,1z M7,4V3h10v1H7L7,4z M7,18V6 h10v12H7L7,18z M7,21v-1h10v1H7L7,21z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "16,7 8,7 8,9 16,9 16,7"
})))));

const MaterialAdUnitsTwoTone = (styled.default || styled)(MaterialAdUnitsTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAdUnitsTwoTone;
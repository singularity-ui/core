import React from 'react';
import styled from 'styled-components';

const MaterialSportsGolfOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,16c3.87,0,7-3.13,7-7c0-3.87-3.13-7-7-7C8.13,2,5,5.13,5,9C5,12.87,8.13,16,12,16z M12,4c2.76,0,5,2.24,5,5 s-2.24,5-5,5s-5-2.24-5-5S9.24,4,12,4z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10",
  cy: "8",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "8",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "6",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7,19h2c1.1,0,2,0.9,2,2v1h2v-1c0-1.1,0.9-2,2-2h2v-2H7V19z"
}))));

const MaterialSportsGolfOutlined = (styled.default || styled)(MaterialSportsGolfOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSportsGolfOutlined;
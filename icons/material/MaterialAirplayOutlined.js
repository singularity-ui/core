import React from 'react';
import styled from 'styled-components';

const MaterialAirplayOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "6,22 18,22 12,16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,3H3C1.9,3,1,3.9,1,5v12c0,1.1,0.9,2,2,2h4v-2H3V5h18v12h-4v2h4c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z"
}))));

const MaterialAirplayOutlined = (styled.default || styled)(MaterialAirplayOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAirplayOutlined;
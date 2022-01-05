import React from 'react';
import styled from 'styled-components';

const MaterialMapsHomeWorkOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "17",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "17",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "17",
  y: "15"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1,11v10h6v-5h2v5h6V11L8,6L1,11z M13,19h-2v-5H5v5H3v-7l5-3.5l5,3.5V19z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "10,3 10,4.97 12,6.4 12,5 21,5 21,19 17,19 17,21 23,21 23,3"
}))));

const MaterialMapsHomeWorkOutlined = (styled.default || styled)(MaterialMapsHomeWorkOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMapsHomeWorkOutlined;
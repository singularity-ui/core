import React from 'react';
import styled from 'styled-components';

const MaterialDoubleArrowOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "15.5,5 11,5 16,12 11,19 15.5,19 20.5,12"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8.5,5 4,5 9,12 4,19 8.5,19 13.5,12"
}))));

const MaterialDoubleArrowOutlined = (styled.default || styled)(MaterialDoubleArrowOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDoubleArrowOutlined;
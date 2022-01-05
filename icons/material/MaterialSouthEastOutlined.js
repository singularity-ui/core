import React from 'react';
import styled from 'styled-components';

const MaterialSouthEastOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,9h-2v6.59L5.41,4L4,5.41L15.59,17H9v2h10V9z"
}));

const MaterialSouthEastOutlined = (styled.default || styled)(MaterialSouthEastOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSouthEastOutlined;
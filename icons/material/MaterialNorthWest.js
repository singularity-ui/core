import React from 'react';
import styled from 'styled-components';

const MaterialNorthWestSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M5,15h2V8.41L18.59,20L20,18.59L8.41,7H15V5H5V15z"
}));

const MaterialNorthWest = (styled.default || styled)(MaterialNorthWestSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNorthWest;
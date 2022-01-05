import React from 'react';
import styled from 'styled-components';

const MaterialSouthWestSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M15,19v-2H8.41L20,5.41L18.59,4L7,15.59V9H5v10H15z"
}));

const MaterialSouthWest = (styled.default || styled)(MaterialSouthWestSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSouthWest;
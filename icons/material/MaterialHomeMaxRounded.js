import React from 'react';
import styled from 'styled-components';

const MaterialHomeMaxRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,5H5C2.79,5,1,6.79,1,9v5c0,2.21,1.79,4,4,4h2c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1h2c2.21,0,4-1.79,4-4V9 C23,6.79,21.21,5,19,5z M21,14c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2V14z"
})));

const MaterialHomeMaxRounded = (styled.default || styled)(MaterialHomeMaxRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialHomeMaxRounded;
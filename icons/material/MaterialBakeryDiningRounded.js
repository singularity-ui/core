import React from 'react';
import styled from 'styled-components';

const MaterialBakeryDiningRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18.77,8.55L17.6,8.08c-0.62-0.25-1.31,0.17-1.37,0.84l-0.74,8.08H17l2.6-6.5C19.91,9.73,19.54,8.85,18.77,8.55z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6.4,8.08L5.23,8.55C4.46,8.85,4.09,9.73,4.4,10.5l2.6,6.5h1.5L7.76,8.92C7.7,8.25,7.02,7.83,6.4,8.08z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M13.36,6h-2.71C9.76,6,9.07,6.76,9.15,7.64L10,16.99h4l0.85-9.36C14.93,6.76,14.24,6,13.36,6z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3.18,13.72l-1,1.93c-0.19,0.36-0.23,0.78-0.12,1.19c0.29,1.01,1.43,1.41,2.38,0.94l1.05-0.52l-1.4-3.49 C3.93,13.37,3.38,13.34,3.18,13.72z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.82,15.65l-1-1.93c-0.2-0.38-0.75-0.35-0.91,0.04l-1.4,3.49l1.05,0.52c0.94,0.47,2.09,0.07,2.38-0.94 C22.05,16.43,22.01,16.01,21.82,15.65z"
})))));

const MaterialBakeryDiningRounded = (styled.default || styled)(MaterialBakeryDiningRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBakeryDiningRounded;
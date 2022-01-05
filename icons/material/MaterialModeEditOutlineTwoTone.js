import React from 'react';
import styled from 'styled-components';

const MaterialModeEditOutlineTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  opacity: ".3",
  points: "5,18.08 5,19 5.92,19 14.98,9.94 14.06,9.02"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3,17.25L3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25z M5.92,19L5,19l0-0.92l9.06-9.06l0.92,0.92L5.92,19z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20.71,5.63l-2.34-2.34c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83C21.1,6.65,21.1,6.02,20.71,5.63z"
})))));

const MaterialModeEditOutlineTwoTone = (styled.default || styled)(MaterialModeEditOutlineTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialModeEditOutlineTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialSportsMmaTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M15,5H7v5.6C7,10.74,7.64,14,7.64,14h8.72c0,0,0.64-3.26,0.64-3.4V10h-2V5z M14,10H8V7h6V10z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7,20c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1v-3H7V20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,7c-0.55,0-1,0.45-1,1V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v5.8c0,0.13,0.01,0.26,0.04,0.39l0.8,4 c0.09,0.47,0.5,0.8,0.98,0.8H17c0.55,0,1.09-0.44,1.2-0.98l0.77-3.83C18.99,11.06,19,10.93,19,10.8V9V8C19,7.45,18.55,7,18,7z M17,10.6c0,0.13-0.64,3.4-0.64,3.4H7.64c0,0-0.64-3.26-0.64-3.4V5h8v5h2V10.6z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  width: "6",
  x: "8",
  y: "7"
}))));

const MaterialSportsMmaTwoTone = (styled.default || styled)(MaterialSportsMmaTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSportsMmaTwoTone;
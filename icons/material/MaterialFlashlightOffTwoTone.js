import React from 'react';
import styled from 'styled-components';

const MaterialFlashlightOffTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "16,7 9.83,7 14,11.17 14,10.4 16,7.39"
}), /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "10,12.83 10,20 14,20 14,16.83"
}), /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "16,5 16,4 6.83,4 7.83,5"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M2.81,2.81L1.39,4.22L8,10.83V22h8v-3.17l3.78,3.78l1.41-1.41L2.81,2.81z M14,20h-4v-7.17l4,4V20z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "16,4 16,5 7.83,5 9.83,7 16,7 16,7.39 14,10.4 14,11.17 16,13.17 16,11 18,8 18,2 6,2 6,3.17 6.83,4"
})))));

const MaterialFlashlightOffTwoTone = (styled.default || styled)(MaterialFlashlightOffTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFlashlightOffTwoTone;
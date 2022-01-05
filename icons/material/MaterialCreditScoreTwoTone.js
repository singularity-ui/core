import React from 'react';
import styled from 'styled-components';

const MaterialCreditScoreTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h5v-2H4v-6h18V6C22,4.89,21.11,4,20,4z M20,8H4V6h16V8z M14.93,19.17l-2.83-2.83l-1.41,1.41L14.93,22L22,14.93l-1.41-1.41L14.93,19.17z"
})));

const MaterialCreditScoreTwoTone = (styled.default || styled)(MaterialCreditScoreTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCreditScoreTwoTone;
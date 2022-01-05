import React from 'react';
import styled from 'styled-components';

const MaterialScreenLockPortraitRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,1.99,2,1.99L17,23c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M17,18H7V6h10V18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14,11v-1c0-1.1-0.9-2-2-2s-2,0.9-2,2v1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-3 C15,11.45,14.55,11,14,11z M13,11h-2v-1c0-0.55,0.45-1,1-1s1,0.45,1,1V11z"
}))), /*#__PURE__*/React.createElement("g", null));

const MaterialScreenLockPortraitRounded = (styled.default || styled)(MaterialScreenLockPortraitRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialScreenLockPortraitRounded;
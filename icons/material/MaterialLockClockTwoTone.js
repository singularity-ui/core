import React from 'react';
import styled from 'styled-components';

const MaterialLockClockTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M11.29,20H6V10h12v1c0.7,0,1.37,0.1,2,0.29V10c0-1.1-0.9-2-2-2h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2 v10c0,1.1,0.9,2,2,2h6.26C11.84,21.4,11.51,20.72,11.29,20z M9,6c0-1.66,1.34-3,3-3s3,1.34,3,3v2H9V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,18c0-3.87,3.13-7,7-7v-1H6v10h5.29C11.1,19.37,11,18.7,11,18z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M19.65,20.35l-2.15-2.15V15h1v2.79l1.85,1.85 L19.65,20.35z"
}))));

const MaterialLockClockTwoTone = (styled.default || styled)(MaterialLockClockTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLockClockTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialDeleteForeverRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M9.17,12.59c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0 L12,12.59l1.41-1.41c0.39-0.39,1.02-0.39,1.41,0s0.39,1.02,0,1.41L13.41,14l1.41,1.41c0.39,0.39,0.39,1.02,0,1.41 s-1.02,0.39-1.41,0L12,15.41l-1.41,1.41c-0.39,0.39-1.02,0.39-1.41,0c-0.39-0.39-0.39-1.02,0-1.41L10.59,14L9.17,12.59z M18,4h-2.5 l-0.71-0.71C14.61,3.11,14.35,3,14.09,3H9.91c-0.26,0-0.52,0.11-0.7,0.29L8.5,4H6C5.45,4,5,4.45,5,5s0.45,1,1,1h12 c0.55,0,1-0.45,1-1S18.55,4,18,4z"
})));

const MaterialDeleteForeverRounded = (styled.default || styled)(MaterialDeleteForeverRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDeleteForeverRounded;
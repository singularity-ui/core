import React from 'react';
import styled from 'styled-components';

const MaterialNoteAltSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,3h-6.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H3v18h18V3z M12,2.75c0.41,0,0.75,0.34,0.75,0.75S12.41,4.25,12,4.25 s-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75z M9.1,17H7v-2.14l5.96-5.96l2.12,2.12L9.1,17z M17.2,8.91l-1.41,1.41L13.66,8.2 l1.41-1.41L17.2,8.91z"
})));

const MaterialNoteAltSharp = (styled.default || styled)(MaterialNoteAltSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNoteAltSharp;
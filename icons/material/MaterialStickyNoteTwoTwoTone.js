import React from 'react';
import styled from 'styled-components';

const MaterialStickyNoteTwoTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,5v14h9v-5h5V5H5z M12,14H7v-2h5V14z M17,10H7V8h10V10z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,5v9l-5,0l0,5H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h10l6-6V5C21,3.9,20.1,3,19,3z M12,14H7v-2h5V14z M17,10H7V8h10V10z"
}));

const MaterialStickyNoteTwoTwoTone = (styled.default || styled)(MaterialStickyNoteTwoTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialStickyNoteTwoTwoTone;
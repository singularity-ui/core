import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
const ACCENT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info'
};
const ACCENTS = Object.values(ACCENT);
const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
const SIZES = Object.values(SIZE);

const MaterialBiotechTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "5",
  opacity: ".3",
  transform: "matrix(0.9397 -0.342 0.342 0.9397 -1.6091 4.9556)",
  width: "1",
  x: "12.75",
  y: "4.54"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10.5",
  cy: "8",
  opacity: ".3",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.47-2.57 c0.41,0.59,1.06,1,1.83,1.06c0.7,0.06,1.36-0.19,1.85-0.62l0.59,1.61l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94l0.94-0.34 L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97l0.56,1.55C9.39,5.48,8.37,6.27,8.08,7.38C6.27,8.14,5,9.92,5,12 c0,2.76,2.24,5,5,5v2H7z M12.86,4.52l1.71,4.7l-0.94,0.34l-1.71-4.7L12.86,4.52z M10.5,7c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1C9.5,7.45,9.95,7,10.5,7z"
}))));

const MaterialBiotechTwoTone = (styled.default || styled)(MaterialBiotechTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialBiotechTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBiotechTwoTone;
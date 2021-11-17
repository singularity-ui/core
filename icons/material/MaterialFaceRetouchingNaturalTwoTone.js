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

const MaterialFaceRetouchingNaturalTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M10.66,4.12c2.55,4.23,7.03,3.87,7.18,3.86l-0.57-1.25L12.4,4.5l0.85-0.39C12.84,4.04,12.43,4,12,4 C11.54,4,11.09,4.05,10.66,4.12z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.08,5.03C6.37,6,5.05,7.58,4.42,9.47C6.13,8.5,7.45,6.92,8.08,5.03z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.89,10.75C19.96,11.16,20,11.57,20,12c0,4.41-3.59,8-8,8s-8-3.59-8-8c0-0.05,0.01-0.1,0-0.14 c2.6-0.98,4.69-2.99,5.74-5.55c3.38,4.14,7.97,3.73,8.99,3.61l-0.89-1.93c-0.13,0.01-4.62,0.38-7.18-3.86 c1.01-0.16,1.71-0.15,2.59-0.01l2.12-0.97l0.64-0.29C14.78,2.3,13.43,2,12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 c0-1.43-0.3-2.78-0.84-4.01L19.89,10.75z M8.08,5.03C7.45,6.92,6.13,8.5,4.42,9.47C5.05,7.58,6.37,6,8.08,5.03z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "13",
  r: "1.25"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15",
  cy: "13",
  r: "1.25"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "20.6,3.4 19.5,1 18.4,3.4 16,4.5 18.4,5.6 19.5,8 20.6,5.6 23,4.5"
}))));

const MaterialFaceRetouchingNaturalTwoTone = (styled.default || styled)(MaterialFaceRetouchingNaturalTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialFaceRetouchingNaturalTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialFaceRetouchingNaturalTwoTone;
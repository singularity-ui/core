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

const MaterialStarRateTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("polygon", {
  "enable-background": "new",
  opacity: ".3",
  points: "12.94,12 12,8.89 11.06,12 8.24,12 10.51,13.62 9.58,16.63 12,14.79 14.42,16.63 13.49,13.62 15.76,12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,10h-7.58L12,2l-2.42,8H2l6.17,4.41L5.83,22L12,17.31L18.17,22l-2.35-7.59L22,10z M14.42,16.63L12,14.79l-2.42,1.84 l0.93-3.01L8.24,12h2.82L12,8.89L12.94,12h2.82l-2.27,1.62L14.42,16.63z"
})));

const MaterialStarRateTwoTone = (styled.default || styled)(MaterialStarRateTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialStarRateTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialStarRateTwoTone;
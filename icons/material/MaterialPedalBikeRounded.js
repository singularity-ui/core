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

const MaterialPedalBikeRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18.18,10l-1.7-4.68C16.19,4.53,15.44,4,14.6,4H13c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h1.6l1.46,4h-4.81l-0.36-1h0.09 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H8C7.45,7,7,7.45,7,8v0c0,0.55,0.45,1,1,1h0.75l1.82,5H9.9c-0.44-2.23-2.31-3.88-4.65-3.99 C2.45,9.87,0,12.2,0,15c0,2.8,2.2,5,5,5c2.46,0,4.45-1.69,4.9-4h4.2c0.44,2.23,2.31,3.88,4.65,3.99c2.8,0.13,5.25-2.19,5.25-5 c0-2.8-2.2-5-5-5H18.18z M7.82,16c-0.42,1.23-1.6,2.08-3.02,1.99C3.31,17.9,2.07,16.64,2,15.14C1.93,13.39,3.27,12,5,12 c1.33,0,2.42,0.83,2.82,2H6c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1H7.82z M14.1,14h-1.4l-0.73-2H15 C14.56,12.58,14.24,13.25,14.1,14z M18.88,18c-1.54-0.06-2.84-1.37-2.88-2.92c-0.02-0.96,0.39-1.8,1.05-2.36l0.62,1.7 c0.19,0.52,0.76,0.79,1.28,0.6l0,0c0.52-0.19,0.79-0.76,0.6-1.28l-0.63-1.73c0,0,0,0,0.01-0.01c1.72-0.04,3.08,1.29,3.08,3 C22,16.72,20.62,18.06,18.88,18z"
})));

const MaterialPedalBikeRounded = (styled.default || styled)(MaterialPedalBikeRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialPedalBikeRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialPedalBikeRounded;
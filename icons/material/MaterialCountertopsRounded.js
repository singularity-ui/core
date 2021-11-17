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

const MaterialCountertopsRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,10l0-2.83c0-1.62-1.22-3.08-2.84-3.17c-1.21-0.06-2.27,0.59-2.8,1.57C12.01,6.22,12.53,7,13.27,7h0.01 c0.34,0,0.68-0.16,0.84-0.46C14.28,6.22,14.62,6,15,6c0.55,0,1,0.45,1,1v3H8c1.1,0,2-0.9,2-2V5c0-0.55-0.45-1-1-1H5 C4.45,4,4,4.45,4,5v3c0,1.1,0.9,2,2,2H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h1v7c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1v-7h1 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H18z M13,18h-2v-6h2V18z"
}));

const MaterialCountertopsRounded = (styled.default || styled)(MaterialCountertopsRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialCountertopsRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCountertopsRounded;
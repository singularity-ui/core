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

const MaterialRiceBowlRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M22,12L22,12c0-5.48-4.4-9.93-9.86-10C8.52,1.95,5.29,4.03,3.43,7.14C0.1,12.69,2.98,18.27,8,20.25v0.25 C8,21.33,8.67,22,9.5,22h5c0.83,0,1.5-0.67,1.5-1.5v-0.25C19.53,18.86,22,15.69,22,12z M20,12h-4V5.08C18.39,6.47,20,9.05,20,12z M14,4.26V12h-4V4.26C10.64,4.1,11.31,4,12,4S13.36,4.1,14,4.26z M4,12c0-2.95,1.61-5.53,4-6.92V12H4z"
}));

const MaterialRiceBowlRounded = (styled.default || styled)(MaterialRiceBowlRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialRiceBowlRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialRiceBowlRounded;
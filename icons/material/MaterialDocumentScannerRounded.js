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

const MaterialDocumentScannerRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M3,6C2.45,6,2,5.55,2,5V2c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1S6.55,3,6,3H4v2C4,5.55,3.55,6,3,6z M17,2 c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1h-3C17.45,1,17,1.45,17,2z M3,18c-0.55,0-1,0.45-1,1v3 c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H4v-2C4,18.45,3.55,18,3,18z M17,22c0,0.55,0.45,1,1,1h3 c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v2h-2C17.45,21,17,21.45,17,22z M19,18c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V6 c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2V18z M9,9c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-4C9.45,8,9,8.45,9,9z M9,12c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-4C9.45,11,9,11.45,9,12z M9,15c0,0.55,0.45,1,1,1h4 c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-4C9.45,14,9,14.45,9,15z"
}));

const MaterialDocumentScannerRounded = (styled.default || styled)(MaterialDocumentScannerRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialDocumentScannerRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialDocumentScannerRounded;
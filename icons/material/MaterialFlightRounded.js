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
const MaterialFlightRoundedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 14.58c0-.36-.19-.69-.49-.89L13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-7.51 4.69c-.3.19-.49.53-.49.89 0 .7.68 1.21 1.36 1L10 13.5V19l-1.8 1.35c-.13.09-.2.24-.2.4v.59c0 .33.32.57.64.48L11.5 21l2.86.82c.32.09.64-.15.64-.48v-.59c0-.16-.07-.31-.2-.4L13 19v-5.5l6.64 2.08c.68.21 1.36-.3 1.36-1z"
}));
const MaterialFlightRounded = (styled.default || styled)(MaterialFlightRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialFlightRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialFlightRounded;
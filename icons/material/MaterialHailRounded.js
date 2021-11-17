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

const MaterialHailRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,6c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,6,12,6z M17.95,2L17.95,2c0.59,0,1.06,0.51,1,1.09 C18.93,3.24,18.74,7.15,15,8.4V21c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v-5h-2v5c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1V10.1 c-0.3,0.1-0.5,0.2-0.6,0.3c-0.46,0.36-1.17,0.87-1.36,2.67C6.99,13.59,6.57,14,6.04,14h0c-0.58,0-1.05-0.49-1-1.07 c0.13-1.6,0.62-2.98,2.07-4.22C8.21,7.81,10,7,12,7s2.68-0.46,3.48-1.06c0.43-0.34,1.28-0.99,1.48-3.02C17.01,2.4,17.43,2,17.95,2z M5,16h1c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H5c-0.55,0-1-0.45-1-1v-4C4,16.45,4.45,16,5,16z"
})));

const MaterialHailRounded = (styled.default || styled)(MaterialHailRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialHailRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialHailRounded;
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

const MaterialShuffleOnRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,1H3C1.9,1,1,1.9,1,3v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V3C23,1.9,22.1,1,21,1z M4.3,4.7 c0.39-0.39,1.02-0.39,1.41,0l4.47,4.47l-1.42,1.4L4.3,6.11C3.91,5.72,3.91,5.09,4.3,4.7z M19.59,19.5c0,0.28-0.22,0.5-0.5,0.5H15.3 c-0.45,0-0.67-0.54-0.36-0.85l1.2-1.2l-3.13-3.13l1.41-1.41l3.13,3.14l1.19-1.19c0.31-0.32,0.85-0.1,0.85,0.35V19.5z M19.59,8.29 c0,0.45-0.54,0.67-0.85,0.36l-1.19-1.19L5.7,19.29c-0.39,0.39-1.02,0.39-1.41,0c-0.39-0.39-0.39-1.02,0-1.41L16.13,6.04l-1.19-1.19 C14.63,4.54,14.85,4,15.3,4h3.79c0.28,0,0.5,0.22,0.5,0.5V8.29z"
})));

const MaterialShuffleOnRounded = (styled.default || styled)(MaterialShuffleOnRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialShuffleOnRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialShuffleOnRounded;
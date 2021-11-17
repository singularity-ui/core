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

const MaterialMediaBluetoothOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M9,6.17V5c0-1.1,0.9-2,2-2h2c1.1,0,2,0.9,2,2v0c0,1.1-0.9,2-2,2h-2v1.17L9,6.17z M19.42,15l2.18,2.17 c0.22,0.22,0.22,0.58,0,0.8l0,0c-0.22,0.22-0.58,0.22-0.8,0l-5.98-5.98c-0.22-0.22-0.22-0.58,0-0.8l0,0c0.22-0.22,0.58-0.22,0.8,0 l2.35,2.35V9.61c0-0.45,0.54-0.67,0.85-0.35l2.82,2.82c0.2,0.2,0.2,0.51,0,0.71L19.42,15z M19.17,13.55l1.13-1.13l-1.13-1.13 V13.55z M20.49,20.49c0.39,0.39,0.39,1.02,0,1.41l0,0c-0.39,0.39-1.02,0.39-1.41,0l-3.28-3.28l-0.16,0.16 c-0.23,0.23-0.62,0.23-0.85,0l0,0c-0.23-0.23-0.23-0.62,0-0.85l0.16-0.16L11,13.83l0,3.02c0,2.07-1.68,4.01-3.74,4.14 C4.94,21.13,3,19.29,3,17c0-2.21,1.79-4,4.01-4c0.73,0,1.41,0.21,2,0.55v-1.72L2.1,4.92c-0.39-0.39-0.39-1.02,0-1.41l0,0 c0.39-0.39,1.02-0.39,1.41,0L20.49,20.49z"
}))));

const MaterialMediaBluetoothOffRounded = (styled.default || styled)(MaterialMediaBluetoothOffRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialMediaBluetoothOffRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialMediaBluetoothOffRounded;
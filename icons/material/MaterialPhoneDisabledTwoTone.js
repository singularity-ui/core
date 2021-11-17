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

const MaterialPhoneDisabledTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17.34,14.54l-1.43-1.43c0.56-0.73,1.05-1.5,1.47-2.32l-2.2-2.2c-0.28-0.28-0.36-0.67-0.25-1.02 C15.3,6.45,15.5,5.25,15.5,4c0-0.55,0.45-1,1-1H20c0.55,0,1,0.45,1,1C21,7.98,19.63,11.64,17.34,14.54z M14.52,17.35 C11.63,19.64,7.97,21,4,21c-0.55,0-1-0.45-1-1v-3.49c0-0.55,0.45-1,1-1c1.24,0,2.45-0.2,3.57-0.57c0.1-0.04,0.21-0.05,0.31-0.05 c0.26,0,0.51,0.1,0.71,0.29l2.2,2.2c0.81-0.42,1.58-0.9,2.3-1.46L1.39,4.22l1.42-1.41L21.19,21.2l-1.41,1.41L14.52,17.35z M17.46,5c-0.06,0.89-0.21,1.76-0.45,2.59l1.2,1.2c0.41-1.2,0.67-2.47,0.76-3.79H17.46z M7.6,17.02c-0.85,0.24-1.72,0.39-2.6,0.45 v1.49c1.32-0.09,2.59-0.35,3.8-0.75L7.6,17.02z"
}))));

const MaterialPhoneDisabledTwoTone = (styled.default || styled)(MaterialPhoneDisabledTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialPhoneDisabledTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialPhoneDisabledTwoTone;
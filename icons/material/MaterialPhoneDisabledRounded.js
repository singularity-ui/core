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

const MaterialPhoneDisabledRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M14.54,17.37c-2.63,2.08-5.89,3.39-9.45,3.61c-1.13,0.07-2.07-0.87-2.07-2v-1.73 c-0.01-1.01,0.75-1.86,1.76-1.98l2.54-0.29c0.61-0.07,1.21,0.14,1.64,0.57l1.84,1.84c0.81-0.41,1.59-0.9,2.31-1.45L2.1,4.93 c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.03-0.39,1.42,0L20.49,20.5c0.39,0.39,0.39,1.02,0,1.41s-1.02,0.39-1.41,0 L14.54,17.37z M17.39,10.8l-1.85-1.85c-0.43-0.43-0.64-1.03-0.57-1.64l0.29-2.52c0.12-1.01,0.97-1.77,1.99-1.77h1.73 c1.13,0,2.07,0.94,2,2.07c-0.22,3.57-1.54,6.83-3.62,9.47l-1.43-1.43C16.48,12.4,16.97,11.62,17.39,10.8z"
}))));

const MaterialPhoneDisabledRounded = (styled.default || styled)(MaterialPhoneDisabledRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialPhoneDisabledRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialPhoneDisabledRounded;
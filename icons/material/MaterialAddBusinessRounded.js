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

const MaterialAddBusinessRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3,6h13c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H3C2.45,4,2,4.45,2,5C2,5.55,2.45,6,3,6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15,17h2v-3h0.18c0.63,0,1.1-0.58,0.98-1.2l-1-5C17.07,7.34,16.66,7,16.18,7H2.82C2.34,7,1.93,7.34,1.84,7.8l-1,5 C0.72,13.42,1.19,14,1.82,14H2v5c0,0.55,0.45,1,1,1h7c0.55,0,1-0.45,1-1v-5h4V17z M9,18H4v-4h5V18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,18h-2v-2c0-0.55-0.45-1-1-1s-1,0.45-1,1v2h-2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1 v-2h2c0.55,0,1-0.45,1-1C23,18.45,22.55,18,22,18z"
}))));

const MaterialAddBusinessRounded = (styled.default || styled)(MaterialAddBusinessRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialAddBusinessRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialAddBusinessRounded;
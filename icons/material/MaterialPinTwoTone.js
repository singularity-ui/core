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

const MaterialPinTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M4,18h16V6H4V18z M16.84,12.38h-0.5v-1h0.46c0.33,0,0.88-0.14,0.88-0.72c0-0.39-0.31-0.65-0.75-0.65 c-0.5,0-0.74,0.32-0.85,0.64l-0.99-0.41C15.2,9.9,15.68,9,16.94,9c1.09,0,1.54,0.64,1.62,0.75c0.33,0.5,0.28,1.16,0.02,1.57 c-0.15,0.22-0.32,0.38-0.52,0.48v0.07c0.28,0.11,0.51,0.28,0.68,0.52c0.37,0.52,0.33,1.27,0.01,1.76 C18.67,14.28,18.19,15,16.99,15c-0.04,0-1.6,0.08-2.05-1.51l1.03-0.41c0.02,0.1,0.19,0.86,1.02,0.86c0.41,0,0.89-0.28,0.89-0.77 C17.88,12.62,17.4,12.38,16.84,12.38z M10.56,9.2c0.69-0.33,1.48-0.2,1.95,0.03c0.86,0.44,0.91,1.24,0.91,1.48 c0,0.64-0.31,1.26-0.92,1.86c-0.25,0.25-0.72,0.71-1.4,1.39l0.03,0.05h2.37V15H9.61v-1.02c1.07-1.07,1.77-1.77,2.13-2.15 c0.4-0.42,0.54-0.69,0.54-1.06c0-0.4-0.31-0.72-0.81-0.72c-0.52,0-0.8,0.39-0.9,0.72l-1.01-0.42C9.57,10.33,9.74,9.59,10.56,9.2z M6.77,9h0.87v6H6.49v-4.5l-0.9,0.66l-0.58-0.89L6.77,9z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "6.49,10.5 6.49,15 7.64,15 7.64,9 6.77,9 5.01,10.27 5.59,11.16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.47,10.05c0.5,0,0.81,0.32,0.81,0.72c0,0.37-0.14,0.64-0.54,1.06c-0.36,0.38-1.06,1.08-2.13,2.15V15h3.89v-0.99h-2.37 l-0.03-0.05c0.68-0.68,1.15-1.14,1.4-1.39c0.61-0.6,0.92-1.22,0.92-1.86c0-0.24-0.05-1.04-0.91-1.48C12.04,9,11.25,8.87,10.56,9.2 c-0.82,0.39-0.99,1.13-1,1.15l1.01,0.42C10.67,10.44,10.95,10.05,11.47,10.05z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.99,13.94c-0.83,0-0.99-0.76-1.02-0.86l-1.03,0.41c0.45,1.59,2.01,1.51,2.05,1.51c1.2,0,1.68-0.72,1.76-0.85 c0.32-0.49,0.36-1.24-0.01-1.76c-0.17-0.24-0.4-0.41-0.68-0.52V11.8c0.2-0.1,0.37-0.26,0.52-0.48c0.26-0.41,0.31-1.07-0.02-1.57 C18.48,9.64,18.03,9,16.94,9c-1.26,0-1.74,0.9-1.85,1.24l0.99,0.41c0.11-0.32,0.35-0.64,0.85-0.64c0.44,0,0.75,0.26,0.75,0.65 c0,0.58-0.55,0.72-0.88,0.72h-0.46v1h0.5c0.56,0,1.04,0.24,1.04,0.79C17.88,13.66,17.4,13.94,16.99,13.94z"
}))));

const MaterialPinTwoTone = (styled.default || styled)(MaterialPinTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialPinTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialPinTwoTone;
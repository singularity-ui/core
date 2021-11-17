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

const MaterialShowerRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "17",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "17",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "17",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,5.08V4c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1.08C7.61,5.57,5,8.47,5,12v1c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1 v-1C19,8.47,16.39,5.57,13,5.08z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "20",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "20",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "20",
  r: "1"
})));

const MaterialShowerRounded = (styled.default || styled)(MaterialShowerRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialShowerRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialShowerRounded;
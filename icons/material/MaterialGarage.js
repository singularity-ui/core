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

const MaterialGarageSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "15",
  cy: "13",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "13",
  r: "1"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8.33,7.5 7.67,9.5 16.33,9.5 15.67,7.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M19,17.69 c0,0.45-0.35,0.81-0.78,0.81h-0.44c-0.44,0-0.78-0.36-0.78-0.81V16.5H7v1.19c0,0.45-0.35,0.81-0.78,0.81H5.78 C5.35,18.5,5,18.14,5,17.69v-6.5C5.82,8.72,6.34,7.16,6.56,6.5c0.05-0.16,0.12-0.29,0.19-0.4C6.77,6.08,6.78,6.06,6.8,6.04 C7.18,5.51,7.72,5.5,7.72,5.5h8.56c0,0,0.54,0.01,0.92,0.53c0.02,0.03,0.03,0.05,0.05,0.07c0.07,0.11,0.14,0.24,0.19,0.4 c0.22,0.66,0.74,2.23,1.56,4.69V17.69z"
}))));

const MaterialGarage = (styled.default || styled)(MaterialGarageSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialGarage.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialGarage;
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

const MaterialDirectionsOffOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.71,11.29l-9-9c-0.39-0.39-1.02-0.39-1.41,0L8.21,5.38l1.41,1.41L12,4.42L19.58,12l-2.38,2.38l1.41,1.41l3.09-3.09 C22.1,12.33,22.1,11.7,21.71,11.29z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "13,7.5 13,10.17 15.17,12.34 16.5,11"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.39,4.22l3.99,3.99l-3.09,3.09c-0.39,0.39-0.39,1.02,0,1.41l9,9c0.39,0.39,1.02,0.39,1.41,0l3.09-3.09l3.99,3.99 l1.41-1.41L2.81,2.81L1.39,4.22z M8.03,10.85C8.02,10.9,7.99,10.95,7.99,11v4h2v-2.18l4.38,4.38L12,19.58L4.42,12l2.38-2.38 L8.03,10.85z"
}))));

const MaterialDirectionsOffOutlined = (styled.default || styled)(MaterialDirectionsOffOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialDirectionsOffOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialDirectionsOffOutlined;
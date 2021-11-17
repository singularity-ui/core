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

const MaterialAutoFixOffOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  x: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.17,8.42l1.41,1.41l-1.46,1.46l1.41,1.41l2.17-2.17c0.39-0.39,0.39-1.02,0-1.41l-2.83-2.83C14.68,6.1,14.43,6,14.17,6 c-0.26,0-0.51,0.1-0.71,0.29l-2.17,2.17l1.41,1.41L14.17,8.42z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.39,4.22l7.07,7.07l-6.17,6.17c-0.39,0.39-0.39,1.02,0,1.41l2.83,2.83C5.32,21.9,5.57,22,5.83,22s0.51-0.1,0.71-0.29 l6.17-6.17l7.07,7.07l1.41-1.41L2.81,2.81L1.39,4.22z M11.29,14.12l-5.46,5.46l-1.41-1.41l5.46-5.46L11.29,14.12z"
}))));

const MaterialAutoFixOffOutlined = (styled.default || styled)(MaterialAutoFixOffOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialAutoFixOffOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialAutoFixOffOutlined;
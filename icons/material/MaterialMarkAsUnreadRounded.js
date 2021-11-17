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

const MaterialMarkAsUnreadRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M16.23,7h2.6c-0.06-0.47-0.36-0.94-0.79-1.17L11.4,2.45c-0.56-0.29-1.23-0.29-1.8-0.01L2.8,5.83C2.32,6.09,2,6.64,2,7.17 V15c0,1.1,0.9,2,2,2V7.4L10.5,4L16.23,7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,8H7c-1.1,0-2,0.9-2,2v9c0,1.1,0.9,2,2,2h13c1.1,0,2-0.9,2-2v-9C22,8.9,21.1,8,20,8z M20,11.46 c0,0.33-0.19,0.64-0.48,0.79l-5.61,2.88c-0.25,0.13-0.56,0.13-0.81,0l-5.61-2.88C7.19,12.1,7,11.79,7,11.46v0 c0-0.67,0.7-1.1,1.3-0.79l5.2,2.67l5.2-2.67C19.3,10.36,20,10.79,20,11.46L20,11.46z"
}))));

const MaterialMarkAsUnreadRounded = (styled.default || styled)(MaterialMarkAsUnreadRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialMarkAsUnreadRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialMarkAsUnreadRounded;
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

const MaterialSignalWifiFourBarLockSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21.98,11L24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98l6.35,6.36L12,21l3.05-3.05V15 c0-0.45,0.09-0.88,0.23-1.29c0.54-1.57,2.01-2.71,3.77-2.71H21.98z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,15.11c0-1-0.68-1.92-1.66-2.08c-0.12-0.02-0.24-0.02-0.36-0.02l0,0c0,0-0.01,0-0.01,0C18.88,13.03,18,13.91,18,15v1 c-0.55,0-1,0-1,0v5h6v-5c0,0-0.45,0-1,0V15.11z M21,16h-2v-1c0-0.55,0.45-1,1-1s1,0.45,1,1V16z"
}))));

const MaterialSignalWifiFourBarLockSharp = (styled.default || styled)(MaterialSignalWifiFourBarLockSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialSignalWifiFourBarLockSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSignalWifiFourBarLockSharp;
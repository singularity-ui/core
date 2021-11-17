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

const MaterialMarkEmailReadTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,8v4.08C19.67,12.03,19.34,12,19,12c-3.53,0-6.43,2.61-6.92,6H4V8l8,5L20,8z M20,6H4l8,5L20,6z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.08,18H4V8l8,5l8-5v4.08c0.71,0.1,1.38,0.31,2,0.6V6c0-1.1-0.9-2-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2 h8.08C12.03,19.67,12,19.34,12,19S12.03,18.33,12.08,18z M20,6l-8,5L4,6H20z M17.34,22l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24 L23,16.34L17.34,22z"
})));

const MaterialMarkEmailReadTwoTone = (styled.default || styled)(MaterialMarkEmailReadTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialMarkEmailReadTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialMarkEmailReadTwoTone;
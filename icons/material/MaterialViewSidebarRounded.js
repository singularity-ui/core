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

const MaterialViewSidebarRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M15,20H3c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h12c0.55,0,1,0.45,1,1v14C16,19.55,15.55,20,15,20z M19,8h2 c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v2C18,7.55,18.45,8,19,8z M19,20h2c0.55,0,1-0.45,1-1v-2 c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v2C18,19.55,18.45,20,19,20z M19,14h2c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h-2 c-0.55,0-1,0.45-1,1v2C18,13.55,18.45,14,19,14z"
})));

const MaterialViewSidebarRounded = (styled.default || styled)(MaterialViewSidebarRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialViewSidebarRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialViewSidebarRounded;
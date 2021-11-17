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

const MaterialViewArrayRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,5h-1c-0.55,0-1,0.45-1,1v12c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1V6C21,5.45,20.55,5,20,5z M16,5H8C7.45,5,7,5.45,7,6 v12c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V6C17,5.45,16.55,5,16,5z M5,5H4C3.45,5,3,5.45,3,6v12c0,0.55,0.45,1,1,1h1 c0.55,0,1-0.45,1-1V6C6,5.45,5.55,5,5,5z"
}));

const MaterialViewArrayRounded = (styled.default || styled)(MaterialViewArrayRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialViewArrayRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialViewArrayRounded;
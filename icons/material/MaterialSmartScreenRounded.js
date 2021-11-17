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
const MaterialSmartScreenRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M18,7v10H6V7H18z M14,12 c0-0.41-0.34-0.75-0.75-0.75S12.5,11.59,12.5,12s0.34,0.75,0.75,0.75S14,12.41,14,12z M9,12c0-0.41-0.34-0.75-0.75-0.75 S7.5,11.59,7.5,12s0.34,0.75,0.75,0.75S9,12.41,9,12z M16.5,12c0-0.41-0.34-0.75-0.75-0.75S15,11.59,15,12s0.34,0.75,0.75,0.75 S16.5,12.41,16.5,12z M11.5,12c0-0.41-0.34-0.75-0.75-0.75S10,11.59,10,12s0.34,0.75,0.75,0.75S11.5,12.41,11.5,12z"
}))));
const MaterialSmartScreenRounded = (styled.default || styled)(MaterialSmartScreenRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSmartScreenRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSmartScreenRounded;
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
const MaterialNearbyOffRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M21.41,13.42L18.83,16l-1.81-1.81L19.2,12L12,4.8L9.81,6.99L8,5.17l2.58-2.58c0.78-0.78,2.05-0.78,2.83,0l8,8 C22.2,11.37,22.2,12.63,21.41,13.42z M20.48,21.9L20.48,21.9c-0.39,0.39-1.02,0.39-1.41,0L16,18.83l-2.58,2.58 c-0.78,0.78-2.05,0.78-2.83,0l-8-8c-0.78-0.78-0.78-2.05,0-2.83L5.17,8L2.1,4.93c-0.39-0.39-0.39-1.02,0-1.41l0,0 c0.39-0.39,1.02-0.39,1.41,0l16.98,16.97C20.87,20.87,20.87,21.51,20.48,21.9z M14.19,17.02l-1.39-1.39l-0.09,0.09 c-0.39,0.39-1.02,0.39-1.42,0l-3.01-3.01c-0.39-0.39-0.39-1.02,0-1.41l0.09-0.09l-1.4-1.39L4.8,12l7.2,7.2L14.19,17.02z M15.71,11.29l-3.01-3.01c-0.39-0.39-1.02-0.39-1.41,0L11.2,8.38l4.42,4.42l0.09-0.09C16.1,12.32,16.1,11.68,15.71,11.29z"
}))));
const MaterialNearbyOffRounded = (styled.default || styled)(MaterialNearbyOffRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialNearbyOffRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialNearbyOffRounded;
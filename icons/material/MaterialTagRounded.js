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
const MaterialTagRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,9L20,9c0-0.55-0.45-1-1-1h-3V5c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v3h-4V5c0-0.55-0.45-1-1-1h0C8.45,4,8,4.45,8,5 v3H5C4.45,8,4,8.45,4,9v0c0,0.55,0.45,1,1,1h3v4H5c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h3v3c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1v-3h4v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3h3c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-3v-4h3 C19.55,10,20,9.55,20,9z M14,14h-4v-4h4V14z"
})));
const MaterialTagRounded = (styled.default || styled)(MaterialTagRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialTagRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialTagRounded;
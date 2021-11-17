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
const MaterialBreakfastDiningTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M18,5H6C4.9,5,4,5.9,4,7c0,0.71,0.38,1.35,1.01,1.73L6,9.31V19h12V9.3l1-0.58c0.63-0.36,1-1.01,1-1.72 C20,5.9,19.1,5,18,5z M15.71,13.7l-3,3C12.51,16.9,12.26,17,12,17s-0.51-0.1-0.71-0.29l-3-3c-0.39-0.39-0.39-1.02,0-1.41l3-3 C11.49,9.1,11.74,9,12,9s0.51,0.1,0.71,0.29l3,3C16.1,12.68,16.1,13.31,15.71,13.7z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,3H6C3.79,3,2,4.79,2,7c0,1.48,0.81,2.75,2,3.45V19c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-8.55c1.19-0.69,2-1.97,2-3.45 C22,4.79,20.21,3,18,3z M19,8.72L18,9.3V19H6V9.31L5.01,8.73C4.38,8.35,4,7.71,4,7c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2 C20,7.71,19.62,8.36,19,8.72z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.71,9.29C12.51,9.1,12.26,9,12,9s-0.51,0.1-0.71,0.29l-3,3c-0.39,0.39-0.39,1.02,0,1.41l3,3C11.49,16.9,11.74,17,12,17 s0.51-0.1,0.71-0.29l3-3c0.39-0.39,0.39-1.02,0-1.41L12.71,9.29z M12,14.58L10.41,13L12,11.41L13.59,13L12,14.58z"
}))));
const MaterialBreakfastDiningTwoTone = (styled.default || styled)(MaterialBreakfastDiningTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialBreakfastDiningTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBreakfastDiningTwoTone;
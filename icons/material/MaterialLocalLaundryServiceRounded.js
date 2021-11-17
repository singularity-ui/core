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
const MaterialLocalLaundryServiceRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M9.64,16.36c1.3,1.3,3.42,1.3,4.72,0c1.3-1.3,1.3-3.42,0-4.72L9.64,16.36z M18,2.01L6,2C4.89,2,4,2.89,4,4v16 c0,1.11,0.89,2,2,2h12c1.11,0,2-0.89,2-2V4C20,2.89,19.11,2.01,18,2.01z M11,5c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1 S10.45,5,11,5z M8,5c0.55,0,1,0.45,1,1S8.55,7,8,7S7,6.55,7,6S7.45,5,8,5z M12,19c-2.76,0-5-2.24-5-5c0-2.76,2.24-5,5-5s5,2.24,5,5 C17,16.76,14.76,19,12,19z"
})));
const MaterialLocalLaundryServiceRounded = (styled.default || styled)(MaterialLocalLaundryServiceRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialLocalLaundryServiceRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialLocalLaundryServiceRounded;
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
const MaterialKingBedRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "3",
  width: "5",
  x: "6",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "3",
  width: "5",
  x: "13",
  y: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,10V7c0-1.1-0.9-2-2-2H6C4.9,5,4,5.9,4,7v3c-1.1,0-2,0.9-2,2v5h1.33l0.51,1.53C3.94,18.81,4.2,19,4.5,19h0 c0.3,0,0.56-0.19,0.66-0.47L5.67,17h12.67l0.51,1.53C18.94,18.81,19.2,19,19.5,19l0,0c0.3,0,0.56-0.19,0.66-0.47L20.67,17H22v-5 C22,10.9,21.1,10,20,10z M11,10H6V8c0-0.55,0.45-1,1-1h4V10z M18,10h-5V7h4c0.55,0,1,0.45,1,1V10z"
}))));
const MaterialKingBedRounded = (styled.default || styled)(MaterialKingBedRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialKingBedRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialKingBedRounded;
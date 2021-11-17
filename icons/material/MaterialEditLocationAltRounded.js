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
const MaterialEditLocationAltRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M13.54,13H10c-0.55,0-1-0.45-1-1V8.46C9,8.2,9.11,7.94,9.29,7.76l5.32-5.32C13.78,2.16,12.9,2,12,2c-4.2,0-8,3.22-8,8.2 c0,3.18,2.44,6.92,7.33,11.22c0.38,0.33,0.96,0.33,1.34,0C17.56,17.12,20,13.37,20,10.2c0-1.01-0.16-1.94-0.45-2.8l-5.31,5.31 C14.06,12.89,13.8,13,13.54,13z"
})), /*#__PURE__*/React.createElement("polygon", {
  points: "11,11 13.12,11 19.28,4.84 17.16,2.72 11,8.88"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.71,2L20,1.29c-0.39-0.39-1.02-0.39-1.41,0l-0.72,0.72l2.12,2.12l0.72-0.72C21.1,3.02,21.1,2.39,20.71,2z"
}))));
const MaterialEditLocationAltRounded = (styled.default || styled)(MaterialEditLocationAltRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialEditLocationAltRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialEditLocationAltRounded;
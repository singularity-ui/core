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

const MaterialAddLocationAltRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M19,0c0.55,0,1,0.45,1,1v2h2c0.55,0,1,0.45,1,1s-0.45,1-1,1h-2v2c0,0.55-0.45,1-1,1s-1-0.45-1-1V5h-2c-0.55,0-1-0.45-1-1 s0.45-1,1-1h2V1C18,0.45,18.45,0,19,0z M12,12c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,12,12,12z M14.72,2.47 C14.28,2.83,14,3.38,14,4c0,1.1,0.9,2,2,2h1v1c0,1.1,0.9,2,2,2c0.32,0,0.62-0.08,0.89-0.21C19.96,9.24,20,9.71,20,10.2 c0,3.18-2.45,6.92-7.34,11.23c-0.38,0.33-0.95,0.33-1.33,0C6.45,17.12,4,13.38,4,10.2C4,5.22,7.8,2,12,2 C12.94,2,13.86,2.16,14.72,2.47z"
})));

const MaterialAddLocationAltRounded = (styled.default || styled)(MaterialAddLocationAltRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialAddLocationAltRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialAddLocationAltRounded;
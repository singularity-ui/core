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
const MaterialSettingsBrightnessRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M17.15,12.35L16,13.5v2 c0,0.28-0.22,0.5-0.5,0.5h-2l-1.15,1.15c-0.2,0.2-0.51,0.2-0.71,0L10.5,16h-2C8.22,16,8,15.78,8,15.5v-2l-1.15-1.15 c-0.2-0.2-0.2-0.51,0-0.71L8,10.5v-2C8,8.22,8.22,8,8.5,8h2l1.15-1.15c0.2-0.2,0.51-0.2,0.71,0L13.5,8h2C15.78,8,16,8.22,16,8.5v2 l1.15,1.15C17.34,11.84,17.34,12.16,17.15,12.35z M12,9v6c1.66,0,3-1.34,3-3C15,10.34,13.66,9,12,9z"
})));
const MaterialSettingsBrightnessRounded = (styled.default || styled)(MaterialSettingsBrightnessRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSettingsBrightnessRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSettingsBrightnessRounded;
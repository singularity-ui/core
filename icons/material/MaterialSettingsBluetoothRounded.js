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

const MaterialSettingsBluetoothRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "23",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "23",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "23",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.41,10L17,6.42c0.39-0.39,0.39-1.02,0-1.42l-4.79-4.79C12.07,0.07,11.89,0,11.71,0C11.32,0,11,0.32,11,0.71v6.88 L7.11,3.71c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L10.59,10l-4.89,4.89c-0.39,0.39-0.39,1.02,0,1.41 c0.39,0.39,1.02,0.39,1.41,0L11,12.41v6.88c0,0.39,0.32,0.71,0.71,0.71c0.19,0,0.37-0.07,0.5-0.21L17,15 c0.39-0.39,0.39-1.02,0-1.42L13.41,10z M13,3.83l1.88,1.88L13,7.59V3.83z M13,16.17v-3.76l1.88,1.88L13,16.17z"
}))));

const MaterialSettingsBluetoothRounded = (styled.default || styled)(MaterialSettingsBluetoothRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSettingsBluetoothRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSettingsBluetoothRounded;
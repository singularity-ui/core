import PropTypes from 'prop-types';
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

const MaterialSettingsInputHdmiRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M18,7V4c0-1.1-0.9-2-2-2H8C6.9,2,6,2.9,6,4v3C5.45,7,5,7.45,5,8v4.7c0,0.2,0.06,0.39,0.17,0.55L8,19v2c0,0.55,0.45,1,1,1h6 c0.55,0,1-0.45,1-1v-2l2.83-5.75C18.94,13.09,19,12.89,19,12.7V8C19,7.45,18.55,7,18,7z M16,7h-2V5.5C14,5.22,13.78,5,13.5,5 S13,5.22,13,5.5V7h-2V5.5C11,5.22,10.78,5,10.5,5S10,5.22,10,5.5V7H8V4h8V7z"
})));

const MaterialSettingsInputHdmiRounded = (styled.default || styled)(MaterialSettingsInputHdmiRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSettingsInputHdmiRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSettingsInputHdmiRounded;
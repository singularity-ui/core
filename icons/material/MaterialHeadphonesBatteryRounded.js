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

const MaterialHeadphonesBatteryRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,7h-1V6.5C20,6.22,19.78,6,19.5,6h-1C18.22,6,18,6.22,18,6.5V7h-1c-0.55,0-1,0.45-1,1v9c0,0.55,0.45,1,1,1h4 c0.55,0,1-0.45,1-1V8C22,7.45,21.55,7,21,7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8,6c-3.31,0-6,2.69-6,6v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-1c0-1.1-0.9-2-2-2H3.5v-1c0-2.48,2.02-4.5,4.5-4.5 s4.5,2.02,4.5,4.5v1H12c-1.1,0-2,0.9-2,2v1c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C14,8.69,11.31,6,8,6z"
}))));

const MaterialHeadphonesBatteryRounded = (styled.default || styled)(MaterialHeadphonesBatteryRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialHeadphonesBatteryRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialHeadphonesBatteryRounded;
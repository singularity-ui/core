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

const MaterialBrunchDiningRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M18,8h2V4h-2V8z M15,22H3c-0.55,0-1-0.45-1-1v-1h14v1C16,21.55,15.55,22,15,22z M18,15.89l-0.4-0.42 c-1.03-1.08-1.6-2.51-1.6-4V3c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v8.51c0,1.46-0.54,2.87-1.53,3.94L20,15.97V20h1 c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1h-2c-0.55,0-1-0.45-1-1V15.89z M7,16v-1c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v1h4 c0.55,0,1,0.45,1,1v1H2v-1c0-0.55,0.45-1,1-1H7z"
}))));

const MaterialBrunchDiningRounded = (styled.default || styled)(MaterialBrunchDiningRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialBrunchDiningRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBrunchDiningRounded;
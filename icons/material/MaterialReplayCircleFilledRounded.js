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

const MaterialReplayCircleFilledRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M18,12.74c-0.12,3.09-2.67,5.64-5.76,5.76 c-3.01,0.12-5.56-1.99-6.12-4.82C5.99,13.07,6.48,12.5,7.1,12.5h0c0.47,0,0.88,0.33,0.98,0.8c0.42,2.07,2.44,3.57,4.72,3.12 c1.56-0.3,2.82-1.56,3.12-3.12c0.5-2.56-1.45-4.8-3.92-4.8v1.79c0,0.45-0.54,0.67-0.85,0.35L8.35,7.85c-0.2-0.2-0.2-0.51,0-0.71 l2.79-2.79C11.46,4.04,12,4.26,12,4.71V6.5C15.39,6.5,18.13,9.32,18,12.74z"
})));

const MaterialReplayCircleFilledRounded = (styled.default || styled)(MaterialReplayCircleFilledRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialReplayCircleFilledRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialReplayCircleFilledRounded;
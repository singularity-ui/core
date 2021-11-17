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

const MaterialModeNightTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M9.5,4C9.16,4,8.82,4.02,8.49,4.07C10.4,6.23,11.5,9.05,11.5,12s-1.1,5.77-3.01,7.93 C8.82,19.98,9.16,20,9.5,20c4.41,0,8-3.59,8-8S13.91,4,9.5,4z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22 c5.52,0,10-4.48,10-10S15.02,2,9.5,2z M9.5,20c-0.34,0-0.68-0.02-1.01-0.07c1.91-2.16,3.01-4.98,3.01-7.93s-1.1-5.77-3.01-7.93 C8.82,4.02,9.16,4,9.5,4c4.41,0,8,3.59,8,8S13.91,20,9.5,20z"
}))));

const MaterialModeNightTwoTone = (styled.default || styled)(MaterialModeNightTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialModeNightTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialModeNightTwoTone;
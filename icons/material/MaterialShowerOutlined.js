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
const MaterialShowerOutlinedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M9,17c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,16.45,9,17z M12,16c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S12.55,16,12,16z M16,16c-0.55,0-1,0.45-1,1s0.45,1,1,1c0.55,0,1-0.45,1-1S16.55,16,16,16z M19,12v2H5v-2c0-3.53,2.61-6.43,6-6.92 V3h2v2.08C16.39,5.57,19,8.47,19,12z M17,12c0-2.76-2.24-5-5-5s-5,2.24-5,5H17z M8,19c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S8.55,19,8,19z M12,19c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S12.55,19,12,19z M16,19c-0.55,0-1,0.45-1,1s0.45,1,1,1 c0.55,0,1-0.45,1-1S16.55,19,16,19z"
})));
const MaterialShowerOutlined = (styled.default || styled)(MaterialShowerOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialShowerOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialShowerOutlined;
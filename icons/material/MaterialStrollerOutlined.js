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

const MaterialStrollerOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,20c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S18,18.9,18,20z M6,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S7.1,18,6,18z M15,8.66L9.6,15H15V8.66 M18.65,3C20.52,3,22,4.56,22,6.48V7h-2V6.48C20,5.66,19.42,5,18.65,5C17.97,5,17.58,5.59,17,6.27V15 c0,1.1-0.9,2-2,2H7.43c-0.85,0-1.31-1-0.76-1.65l8.8-10.32C16.11,4.27,16.99,3,18.65,3L18.65,3z M10,5C9.35,5,8.71,5.09,8.09,5.27 l1.4,1.4l1.37-1.61C10.58,5.02,10.29,5,10,5 M10,3c1.56,0,3.03,0.4,4.3,1.1l-4.7,5.51L4.72,4.72C6.21,3.64,8.03,3,10,3L10,3z"
})));

const MaterialStrollerOutlined = (styled.default || styled)(MaterialStrollerOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialStrollerOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialStrollerOutlined;
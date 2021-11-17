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

const MaterialAlignHorizontalCenterRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,2L12,2c0.55,0,1,0.45,1,1v4l6.5,0C20.33,7,21,7.67,21,8.5v0c0,0.83-0.67,1.5-1.5,1.5H13v4h3.5c0.83,0,1.5,0.67,1.5,1.5 v0c0,0.83-0.67,1.5-1.5,1.5H13v4c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v-4H7.5C6.67,17,6,16.33,6,15.5v0C6,14.67,6.67,14,7.5,14 H11v-4H4.5C3.67,10,3,9.33,3,8.5v0C3,7.67,3.67,7,4.5,7H11l0-4C11,2.45,11.45,2,12,2z"
}));

const MaterialAlignHorizontalCenterRounded = (styled.default || styled)(MaterialAlignHorizontalCenterRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialAlignHorizontalCenterRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialAlignHorizontalCenterRounded;
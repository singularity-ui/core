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

const MaterialSavingsRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19.83,7.5l-2.27-2.27c0.07-0.42,0.18-0.81,0.32-1.15c0.11-0.26,0.15-0.56,0.09-0.87C17.84,2.49,17.14,1.99,16.4,2 c-1.59,0.03-3,0.81-3.9,2l-5,0C4.46,4,2,6.46,2,9.5c0,2.25,1.37,7.48,2.08,10.04C4.32,20.4,5.11,21,6.01,21L8,21c1.1,0,2-0.9,2-2v0 h2v0c0,1.1,0.9,2,2,2l2.01,0c0.88,0,1.66-0.58,1.92-1.43l1.25-4.16l2.14-0.72c0.41-0.14,0.68-0.52,0.68-0.95V8.5c0-0.55-0.45-1-1-1 H19.83z M12,9H9C8.45,9,8,8.55,8,8v0c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v0C13,8.55,12.55,9,12,9z M16,11c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C17,10.55,16.55,11,16,11z"
})));

const MaterialSavingsRounded = (styled.default || styled)(MaterialSavingsRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSavingsRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSavingsRounded;
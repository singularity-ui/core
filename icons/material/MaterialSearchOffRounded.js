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
const MaterialSearchOffRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M15.5,14h-0.79l-0.28-0.27c1.2-1.4,1.82-3.31,1.48-5.34c-0.47-2.78-2.79-4.99-5.58-5.34C6.54,2.58,3.3,5.38,3.03,9h2.02 c0.24-2.12,1.92-3.8,4.06-3.98C11.65,4.8,14,6.95,14,9.5c0,2.49-2.01,4.5-4.5,4.5c-0.17,0-0.33-0.03-0.5-0.05l0,2.02 c0,0,0,0,0.01,0.01c1.8,0.13,3.47-0.47,4.72-1.55L14,14.71v0.79l4.25,4.25c0.41,0.41,1.08,0.41,1.49,0l0,0 c0.41-0.41,0.41-1.08,0-1.49L15.5,14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.12,11.17L4,13.29l-2.12-2.12c-0.2-0.2-0.51-0.2-0.71,0l0,0c-0.2,0.2-0.2,0.51,0,0.71L3.29,14l-2.12,2.12 c-0.2,0.2-0.2,0.51,0,0.71l0,0c0.2,0.2,0.51,0.2,0.71,0L4,14.71l2.12,2.12c0.2,0.2,0.51,0.2,0.71,0l0,0c0.2-0.2,0.2-0.51,0-0.71 L4.71,14l2.12-2.12c0.2-0.2,0.2-0.51,0-0.71l0,0C6.63,10.98,6.32,10.98,6.12,11.17z"
}))));
const MaterialSearchOffRounded = (styled.default || styled)(MaterialSearchOffRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSearchOffRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSearchOffRounded;
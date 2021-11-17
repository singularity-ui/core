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
const MaterialEditRoadRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M17,4L17,4c-0.55,0-1,0.45-1,1v6.9l2-2V5C18,4.45,17.55,4,17,4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,20L5,20c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h0C4.45,4,4,4.45,4,5v14C4,19.55,4.45,20,5,20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,8L11,8c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C10,7.55,10.45,8,11,8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,14L11,14c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C10,13.55,10.45,14,11,14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,20L11,20c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C10,19.55,10.45,20,11,20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.56,12.59l-1.15-1.15c-0.59-0.59-1.54-0.59-2.12,0L14,16.73v2.77c0,0.28,0.22,0.5,0.5,0.5h2.77l5.29-5.29 C23.15,14.12,23.15,13.17,22.56,12.59z M16.58,18.45h-1.03v-1.03L19,13.97L20.03,15L16.58,18.45z"
}))));
const MaterialEditRoadRounded = (styled.default || styled)(MaterialEditRoadRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialEditRoadRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialEditRoadRounded;
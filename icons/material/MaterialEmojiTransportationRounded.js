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

const MaterialEmojiTransportationRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.99,14.77l-1.43-4.11c-0.14-0.4-0.52-0.66-0.97-0.66H12.4c-0.46,0-0.83,0.26-0.98,0.66L10,14.77v5.24 c0,0.55,0.45,0.99,1,0.99s1-0.45,1-1v-1h8v1c0,0.55,0.45,1,1,1s0.99-0.44,1-0.99L21.99,14.77z M11.61,13.34l0.69-2 c0.05-0.2,0.24-0.34,0.46-0.34h6.48c0.21,0,0.4,0.14,0.47,0.34l0.69,2c0.11,0.32-0.13,0.66-0.47,0.66h-7.85 C11.74,14,11.5,13.66,11.61,13.34z M11.99,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S12.54,17,11.99,17z M19.99,17 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S20.54,17,19.99,17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14,4.5V9h1V4c0-0.55-0.45-1-1-1H8C7.45,3,7,3.45,7,4v4H3C2.45,8,2,8.45,2,9v12h1V9.5C3,9.22,3.22,9,3.5,9h4 C7.78,9,8,8.78,8,8.5v-4C8,4.22,8.22,4,8.5,4h5C13.78,4,14,4.22,14,4.5z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "5",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "10",
  y: "5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "5",
  y: "15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "5",
  y: "19"
}))));

const MaterialEmojiTransportationRounded = (styled.default || styled)(MaterialEmojiTransportationRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialEmojiTransportationRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialEmojiTransportationRounded;
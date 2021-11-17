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
const MaterialDoorSlidingTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M13,19h5V5h-5V19z M14,11h2v2h-2V11z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6,19h5V5H6V19z M8,11h2v2H8V11z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,19V5c0-1.1-0.9-2-2-2H6C4.9,3,4,3.9,4,5v14H3v2h18v-2H20z M11,19H6V5h5V19z M18,19h-5V5h5V19z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "8",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "14",
  y: "11"
}))));
const MaterialDoorSlidingTwoTone = (styled.default || styled)(MaterialDoorSlidingTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialDoorSlidingTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialDoorSlidingTwoTone;
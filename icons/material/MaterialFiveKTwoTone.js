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

const MaterialFiveKTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5,19h14V5H5V19z M13,9h1.5v2.25L16.25,9H18l-2.25,3L18,15h-1.75l-1.75-2.25 V15H13V9z M6.5,13.5h3v-1h-3V9H11v1.5H8v1h2c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1H6.5V13.5z",
  "enable-background": "new",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,14v-1.5c0-0.55-0.45-1-1-1H8v-1h3V9H6.5v3.5h3v1h-3V15H10C10.55,15,11,14.55,11,14z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "14.5,12.75 16.25,15 18,15 15.75,12 18,9 16.25,9 14.5,11.25 14.5,9 13,9 13,15 14.5,15"
}))));

const MaterialFiveKTwoTone = (styled.default || styled)(MaterialFiveKTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialFiveKTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialFiveKTwoTone;
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

const MaterialBedTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M19,8c0-0.55-0.45-1-1-1h-4c-0.55,0-1,0.45-1,1v2h6V8z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,8c0-0.55-0.45-1-1-1H6C5.45,7,5,7.45,5,8v2h6V8z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,12H5c-0.55,0-1,0.45-1,1v2h16v-2C20,12.45,19.55,12,19,12z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,10.78V8c0-1.65-1.35-3-3-3h-4c-0.77,0-1.47,0.3-2,0.78C11.47,5.3,10.77,5,10,5H6C4.35,5,3,6.35,3,8v2.78 C2.39,11.33,2,12.12,2,13v6h2v-2h16v2h2v-6C22,12.12,21.61,11.33,21,10.78z M13,8c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v2h-6V8z M5,8c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v2H5V8z M20,15H4v-2c0-0.55,0.45-1,1-1h14c0.55,0,1,0.45,1,1V15z"
}))));

const MaterialBedTwoTone = (styled.default || styled)(MaterialBedTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialBedTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBedTwoTone;
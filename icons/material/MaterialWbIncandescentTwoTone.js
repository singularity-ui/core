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

const MaterialWbIncandescentTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 8.59l-1-.58V4.05h-2v3.96l-1 .58c-1.24.72-2 2.04-2 3.46 0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.42-.77-2.74-2-3.46z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.55 19.09l1.41 1.41 1.79-1.8-1.41-1.41zM11 20h2v3h-2zM1 11h3v2H1zm14-4.14V2.05H9v4.81C7.21 7.9 6 9.83 6 12.05c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm-3 9.19c-2.21 0-4-1.79-4-4 0-1.42.77-2.74 2-3.46l1-.58V4.05h2v3.96l1 .58c1.24.72 2 2.04 2 3.46 0 2.21-1.79 4-4 4zM20 11h3v2h-3zm-2.76 7.71l1.79 1.8 1.41-1.41-1.8-1.79z"
}));

const MaterialWbIncandescentTwoTone = (styled.default || styled)(MaterialWbIncandescentTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialWbIncandescentTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialWbIncandescentTwoTone;
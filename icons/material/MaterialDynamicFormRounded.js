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

const MaterialDynamicFormRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21.68,9.71l-3.72,8.19C17.73,18.39,17,18.23,17,17.69V11h-1.5c-0.28,0-0.5-0.22-0.5-0.5v-6C15,4.22,15.22,4,15.5,4h5.76 c0.35,0,0.6,0.36,0.46,0.69L20,9h1.22C21.59,9,21.83,9.38,21.68,9.71z M15,13v7H4c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2H15z M6.25,16.5c0-0.41-0.34-0.75-0.75-0.75s-0.75,0.34-0.75,0.75c0,0.41,0.34,0.75,0.75,0.75S6.25,16.91,6.25,16.5z M13,4v7H4 c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2H13z M6.25,7.5c0-0.41-0.34-0.75-0.75-0.75S4.75,7.09,4.75,7.5c0,0.41,0.34,0.75,0.75,0.75 S6.25,7.91,6.25,7.5z"
})));

const MaterialDynamicFormRounded = (styled.default || styled)(MaterialDynamicFormRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialDynamicFormRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialDynamicFormRounded;
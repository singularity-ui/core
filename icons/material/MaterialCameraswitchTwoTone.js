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

const MaterialCameraswitchTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M13.17,8h-2.34l-1,1H8v6h8V9h-1.83L13.17,8z M12,14c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2 C14,13.1,13.1,14,12,14z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16,7h-1l-1-1h-4L9,7H8C6.9,7,6,7.9,6,9v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V9C18,7.9,17.1,7,16,7z M16,15H8V9h1.83l1-1 h2.34l1,1H16V15z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.57,0.52L13.05,5V2.05C17.77,2.52,21.53,6.28,22,11c0,0,2,0,2,0C23.34,3.03,15.49-1.58,8.57,0.52z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.95,21.96C6.23,21.49,2.47,17.73,2,13.01c0,0-2,0-2,0c0.66,7.97,8.51,12.58,15.43,10.48l-4.48-4.48V21.96z"
}))));

const MaterialCameraswitchTwoTone = (styled.default || styled)(MaterialCameraswitchTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialCameraswitchTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCameraswitchTwoTone;
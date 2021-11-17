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

const MaterialBlurOnTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "10",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "18",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "14",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "6",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5zM21 14.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "18",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 21c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5zM21 10.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "14",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "6",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "18",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "14",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 14c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10",
  cy: "6",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "10",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "6",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 21c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10",
  cy: "18",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10",
  cy: "14",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10",
  cy: "10",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "10",
  r: "1"
}));

const MaterialBlurOnTwoTone = (styled.default || styled)(MaterialBlurOnTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialBlurOnTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBlurOnTwoTone;
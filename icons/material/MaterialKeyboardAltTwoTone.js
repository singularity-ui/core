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

const MaterialKeyboardAltTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3,19h18V6H3V19z M17,8h2v2h-2V8z M17,12h2v2h-2V12z M13,8h2v2h-2V8z M13,12h2 v2h-2V12z M9,8h2v2H9V8z M9,12h2v2H9V12z M8,16h8v1H8V16z M5,8h2v2H5V8z M5,12h2v2H5V12z",
  "enable-background": "new",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,4H3C1.9,4,1,4.9,1,6v13c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6C23,4.9,22.1,4,21,4z M21,19H3V6h18V19z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "9",
  y: "8"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "5",
  y: "8"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  width: "8",
  x: "8",
  y: "16"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "13",
  y: "8"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "9",
  y: "12"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "5",
  y: "12"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "13",
  y: "12"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "17",
  y: "8"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "17",
  y: "12"
}))));

const MaterialKeyboardAltTwoTone = (styled.default || styled)(MaterialKeyboardAltTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialKeyboardAltTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialKeyboardAltTwoTone;
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

const MaterialNoCellTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M7,21h10v-1H7V21z M7,3v1h10V3H7z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,6v8.17l2,2V3c0-1.1-0.9-1.99-2-1.99L7,1C6.15,1,5.42,1.55,5.13,2.3L8.83,6H17z M7,3h10v1H7V3z M21.19,21.19L2.81,2.81 L1.39,4.22L5,7.83V21c0,1.1,0.9,2,2,2h10c0.85,0,1.58-0.55,1.87-1.3l0.91,0.91L21.19,21.19z M17,21H7v-1h10V21z M7,18V9.83 L15.17,18H7z"
})));

const MaterialNoCellTwoTone = (styled.default || styled)(MaterialNoCellTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialNoCellTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialNoCellTwoTone;
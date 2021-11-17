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

const MaterialNineKPlusTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  opacity: ".3",
  width: "1",
  x: "7.5",
  y: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5V19z M11,9h1.5v2.25L14.25,9H16l-2.25,3L16,15 h-1.75l-1.75-2.25V15H11V9z M6,13.5h2.5v-1H7c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H6 V13.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10,14v-4c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v1.5c0,0.55,0.45,1,1,1h1.5v1H6V15h3C9.55,15,10,14.55,10,14z M8.5,11.5 h-1V10h1V11.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "12.5,12.75 14.25,15 16,15 13.75,12 16,9 14.25,9 12.5,11.25 12.5,9 11,9 11,15 12.5,15"
}))));

const MaterialNineKPlusTwoTone = (styled.default || styled)(MaterialNineKPlusTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialNineKPlusTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialNineKPlusTwoTone;
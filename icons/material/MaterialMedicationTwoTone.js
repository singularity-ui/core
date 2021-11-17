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
const MaterialMedicationTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M7,19h10V8H7V19z M8,12h2.5V9.5h3V12H16v3h-2.5v2.5h-3V15H8V12z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "12",
  x: "6",
  y: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,6H7C5.9,6,5,6.9,5,8v11c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V8C19,6.9,18.1,6,17,6z M17,19H7V8h10V19z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "10.5,17.5 13.5,17.5 13.5,15 16,15 16,12 13.5,12 13.5,9.5 10.5,9.5 10.5,12 8,12 8,15 10.5,15"
}))));
const MaterialMedicationTwoTone = (styled.default || styled)(MaterialMedicationTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialMedicationTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialMedicationTwoTone;
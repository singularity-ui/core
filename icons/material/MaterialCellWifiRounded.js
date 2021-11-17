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
const MaterialCellWifiRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M20.29,7.68L7.7,20.29C7.07,20.92,7.52,22,8.41,22H21c0.55,0,1-0.45,1-1V8.39C22,7.5,20.92,7.05,20.29,7.68z M20,20h-2 v-7.22l2-2V20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.61,10.68c-0.28,0.17-0.32,0.56-0.09,0.79l0.82,0.82c0.39,0.39,1.02,0.39,1.41,0l0.82-0.82 c0.23-0.23,0.18-0.62-0.09-0.79C11.61,10.14,10.49,10.14,9.61,10.68z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.42,9.3c1.57-1.12,3.7-1.12,5.27,0c0.36,0.26,0.85,0.22,1.16-0.1c0.39-0.39,0.35-1.06-0.1-1.38 c-2.2-1.57-5.19-1.57-7.4,0C6.9,8.14,6.85,8.81,7.25,9.2C7.57,9.52,8.06,9.56,8.42,9.3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.26,6.69c0.34,0.28,0.83,0.28,1.14-0.03l0.12-0.12c0.35-0.35,0.31-0.92-0.08-1.24c-3.67-3.05-9.02-3.07-12.7-0.06 C4.31,5.59,4.27,6.23,4.66,6.61C4.98,6.94,5.5,6.98,5.85,6.69C8.86,4.21,13.25,4.21,16.26,6.69z"
}))));
const MaterialCellWifiRounded = (styled.default || styled)(MaterialCellWifiRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialCellWifiRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCellWifiRounded;
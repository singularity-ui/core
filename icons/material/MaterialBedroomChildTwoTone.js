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
const MaterialBedroomChildTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M4,20h16V4H4V20z M6,12.87c0-1,0.62-1.85,1.5-2.2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2v1.67 c0.88,0.35,1.5,1.2,1.5,2.2V17h-1.5v-1.5h-9V17H6V12.87z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,20H4V4h16V20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5,15.5h9V17H18v-4.13c0-1-0.62-1.85-1.5-2.2V9c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v1.67c-0.88,0.35-1.5,1.2-1.5,2.2V17 h1.5V15.5z M9,8.5h6v2H9V8.5z M8.37,12h7.27c0.48,0,0.87,0.39,0.87,0.87V14h-9v-1.13H7.5C7.5,12.39,7.89,12,8.37,12z"
})));
const MaterialBedroomChildTwoTone = (styled.default || styled)(MaterialBedroomChildTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialBedroomChildTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBedroomChildTwoTone;
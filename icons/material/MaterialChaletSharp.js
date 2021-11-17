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
const MaterialChaletSharpSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10,7.5l7.5,7.5l-1.41,1.41L15,15.33V20h-4v-5H9v5H5v-4.67l-1.09,1.09L2.5,15L10,7.5z M22,6.5h-1.19l0.75-0.75l-0.71-0.71 L19.39,6.5H18.5V5.61l1.45-1.45l-0.71-0.71L18.5,4.19V3h-1v1.19l-0.75-0.75l-0.71,0.71l1.45,1.45V6.5h-0.89l-1.45-1.45l-0.71,0.71 l0.75,0.75H14v1h1.19l-0.75,0.75l0.71,0.71l1.45-1.45h0.89v0.89l-1.45,1.45l0.71,0.71l0.75-0.75V11h1V9.81l0.75,0.75l0.71-0.71 L18.5,8.39V7.5h0.89l1.45,1.45l0.71-0.71L20.81,7.5H22V6.5z"
}));
const MaterialChaletSharp = (styled.default || styled)(MaterialChaletSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialChaletSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialChaletSharp;
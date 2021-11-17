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
const MaterialEditNotificationsSharpSvg = /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17.58,6.25l1.77,1.77L14.37,13H12.6v-1.77L17.58,6.25z M20.85,5.81l-1.06-1.06c-0.2-0.2-0.51-0.2-0.71,0l-0.85,0.85 l1.77,1.77l0.85-0.85C21.05,6.32,21.05,6,20.85,5.81z M18,12.2V17h2v2H4v-2h2v-7c0-2.79,1.91-5.14,4.5-5.8V2h3v2.2 c0.82,0.21,1.57,0.59,2.21,1.09L10.6,10.4V15h4.6L18,12.2z M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z"
})));
const MaterialEditNotificationsSharp = (styled.default || styled)(MaterialEditNotificationsSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialEditNotificationsSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialEditNotificationsSharp;
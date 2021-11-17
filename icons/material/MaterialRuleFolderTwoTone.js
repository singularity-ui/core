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
const MaterialRuleFolderTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M11.17,8l-2-2H4v12l16,0V8H11.17z M7.83,16L5,13.17l1.41-1.41l1.41,1.41l3.54-3.54l1.41,1.41L7.83,16z M19,14.59L17.59,16L16,14.41L14.41,16L13,14.59L14.59,13L13,11.41L14.41,10L16,11.59L17.59,10L19,11.41L17.41,13L19,14.59z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.83,16L5,13.17l1.41-1.41l1.41,1.41l3.54-3.54l1.41,1.41L7.83,16z M17.41,13L19,14.59L17.59,16L16,14.41L14.41,16 L13,14.59L14.59,13L13,11.41L14.41,10L16,11.59L17.59,10L19,11.41L17.41,13z M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18L4,18V6h5.17l2,2H20V18z"
})));
const MaterialRuleFolderTwoTone = (styled.default || styled)(MaterialRuleFolderTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialRuleFolderTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialRuleFolderTwoTone;
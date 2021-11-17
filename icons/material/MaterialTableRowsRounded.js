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

const MaterialTableRowsRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M19,8H5C3.9,8,3,7.1,3,6v0c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v0C21,7.1,20.1,8,19,8z M19,10H5c-1.1,0-2,0.9-2,2v0 c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v0C21,10.9,20.1,10,19,10z M19,16H5c-1.1,0-2,0.9-2,2v0c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v0 C21,16.9,20.1,16,19,16z"
}));

const MaterialTableRowsRounded = (styled.default || styled)(MaterialTableRowsRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialTableRowsRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialTableRowsRounded;
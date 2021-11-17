import PropTypes from 'prop-types';
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

const MaterialDataUsageRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 3.87v.02c0 .67.45 1.23 1.08 1.43C16.93 6.21 19 8.86 19 12c0 .52-.06 1.01-.17 1.49-.14.64.12 1.3.69 1.64l.01.01c.86.5 1.98.05 2.21-.91.17-.72.26-1.47.26-2.23 0-4.5-2.98-8.32-7.08-9.57-.95-.29-1.92.44-1.92 1.44zm-2.06 15.05c-2.99-.43-5.42-2.86-5.86-5.84-.54-3.6 1.66-6.77 4.83-7.76.64-.19 1.09-.76 1.09-1.43v-.02c0-1-.97-1.73-1.93-1.44-4.51 1.38-7.66 5.86-6.98 10.96.59 4.38 4.13 7.92 8.51 8.51 3.14.42 6.04-.61 8.13-2.53.74-.68.61-1.89-.26-2.39-.58-.34-1.3-.23-1.8.22-1.47 1.34-3.51 2.05-5.73 1.72z"
}));

const MaterialDataUsageRounded = (styled.default || styled)(MaterialDataUsageRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialDataUsageRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialDataUsageRounded;
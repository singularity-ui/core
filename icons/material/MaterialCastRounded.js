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

const MaterialCastRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 3H3c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-5c-.55 0-1 .45-1 1s.45 1 1 1h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM2.14 14.09c-.6-.1-1.14.39-1.14 1 0 .49.36.9.85.98 2.08.36 3.72 2 4.08 4.08.08.49.49.85.98.85.61 0 1.09-.54 1-1.14-.48-2.96-2.82-5.29-5.77-5.77zM1 18v3h3c0-1.66-1.34-3-3-3zm1.1-7.95c-.59-.05-1.1.41-1.1 1 0 .51.38.94.88.99 4.27.41 7.67 3.81 8.08 8.08.05.5.48.87.99.87.6 0 1.06-.52 1-1.11-.53-5.19-4.66-9.31-9.85-9.83z"
}));

const MaterialCastRounded = (styled.default || styled)(MaterialCastRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialCastRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCastRounded;
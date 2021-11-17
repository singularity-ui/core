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

const MaterialTimerOffTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6c-1.12 0-2.18.27-3.12.74L11 8.86V8h2v2.86l5.26 5.26c.47-.94.74-2 .74-3.12 0-3.87-3.13-7-7-7zm0 14c1.29 0 2.49-.35 3.52-.96L5.96 9.48C5.35 10.51 5 11.71 5 13c0 3.87 3.13 7 7 7z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6c3.87 0 7 3.13 7 7 0 1.12-.27 2.18-.74 3.12l1.47 1.47C20.53 16.25 21 14.68 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.68 0-3.25.47-4.59 1.27l1.47 1.47c.94-.47 2-.74 3.12-.74zm-1 2v.86l2 2V8zM9 1h6v2H9zM3.16 3.86L1.75 5.27 4.5 8.02C3.56 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.41-1.41L3.16 3.86zM12 20c-3.87 0-7-3.13-7-7 0-1.29.35-2.49.96-3.52l9.57 9.57c-1.04.6-2.24.95-3.53.95z"
}));

const MaterialTimerOffTwoTone = (styled.default || styled)(MaterialTimerOffTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialTimerOffTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialTimerOffTwoTone;
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
const MaterialPermCameraMicTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.11 7l-.59-.65L14.28 5h-4.24L8.81 6.35l-.6.65H4v12h7v-1.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V19h7V7h-3.89zM14 12c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v4z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2zm8-1h-3.17l-1.86-2H8.96L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-7v-1.09c2.83-.48 5-2.94 5-5.91h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6c0 2.97 2.17 5.43 5 5.91V19H4V7h4.21l.59-.65L10.04 5h4.24l1.24 1.35.59.65H20v12z"
}));
const MaterialPermCameraMicTwoTone = (styled.default || styled)(MaterialPermCameraMicTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialPermCameraMicTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialPermCameraMicTwoTone;
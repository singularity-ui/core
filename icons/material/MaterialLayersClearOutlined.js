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
const MaterialLayersClearOutlinedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 4.53L17.74 9l-1.89 1.47 1.43 1.42L21 9l-9-7-2.59 2.02 1.42 1.42zm9 9.54l-1.63-1.27-.67.52 1.43 1.43zM3.41.86L2 2.27l4.22 4.22L3 9l9 7 2.1-1.63 1.42 1.42-3.53 2.75-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21l1.41-1.41L3.41.86zM12 13.47L6.26 9l1.39-1.08 5.02 5.02-.67.53z"
}));
const MaterialLayersClearOutlined = (styled.default || styled)(MaterialLayersClearOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialLayersClearOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialLayersClearOutlined;
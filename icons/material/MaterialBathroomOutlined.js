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
const MaterialBathroomOutlinedSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M8,14c0-0.55,0.45-1,1-1s1,0.45,1,1s-0.45,1-1,1S8,14.55,8,14z M12,15c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1 S11.45,15,12,15z M15,15c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S14.45,15,15,15z M12,7.5c-1.76,0-3.22,1.31-3.46,3h6.93 C15.22,8.81,13.76,7.5,12,7.5 M12,6c2.76,0,5,2.24,5,5v1H7v-1C7,8.24,9.24,6,12,6z M9,18c0.55,0,1-0.45,1-1s-0.45-1-1-1 s-1,0.45-1,1S8.45,18,9,18z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M15,18c0.55,0,1-0.45,1-1 s-0.45-1-1-1s-1,0.45-1,1S14.45,18,15,18z M20,4H4v16h16V4 M20,2c1.1,0,2,0.9,2,2v16c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V4 c0-1.1,0.9-2,2-2H20z"
})));
const MaterialBathroomOutlined = (styled.default || styled)(MaterialBathroomOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialBathroomOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBathroomOutlined;
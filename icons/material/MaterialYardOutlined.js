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

const MaterialYardOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M18,13c-3.31,0-6,2.69-6,6C15.31,19,18,16.31,18,13z M6,13c0,3.31,2.69,6,6,6C12,15.69,9.31,13,6,13z M8,11.03 c0,0.86,0.7,1.56,1.56,1.56c0.33,0,0.63-0.1,0.89-0.28l-0.01,0.12c0,0.86,0.7,1.56,1.56,1.56s1.56-0.7,1.56-1.56l-0.01-0.12 c0.25,0.17,0.56,0.28,0.89,0.28c0.86,0,1.56-0.7,1.56-1.56c0-0.62-0.37-1.16-0.89-1.41C15.63,9.38,16,8.84,16,8.22 c0-0.86-0.7-1.56-1.56-1.56c-0.33,0-0.63,0.1-0.89,0.28l0.01-0.12c0-0.86-0.7-1.56-1.56-1.56s-1.56,0.7-1.56,1.56l0.01,0.12 C10.2,6.76,9.89,6.66,9.56,6.66C8.7,6.66,8,7.36,8,8.22c0,0.62,0.37,1.16,0.89,1.41C8.37,9.87,8,10.41,8,11.03z M12,8.06 c0.86,0,1.56,0.7,1.56,1.56s-0.7,1.56-1.56,1.56s-1.56-0.7-1.56-1.56S11.14,8.06,12,8.06z M20,4v16H4V4H20 M20,2H4C2.9,2,2,2.9,2,4 v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z"
})));

const MaterialYardOutlined = (styled.default || styled)(MaterialYardOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialYardOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialYardOutlined;
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

const MaterialHdrEnhancedSelectSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 2C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1 7h-2V9H9V7h2V5h2v2h2v2h-2v2zm11 9h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zm-6-1.5c0 .6-.4 1.1-.9 1.4L18 22h-1.5l-.9-2h-1.1v2H13v-6h3.5c.8 0 1.5.7 1.5 1.5v1zm-1.5 0v-1h-2v1h2zm-13-.5v-2H5v6H3.5v-2.5h-2V22H0v-6h1.5v2h2zm6.5-2c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5H6.5v-6H10zm0 4.5v-3H8v3h2z"
}));

const MaterialHdrEnhancedSelect = (styled.default || styled)(MaterialHdrEnhancedSelectSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialHdrEnhancedSelect.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialHdrEnhancedSelect;
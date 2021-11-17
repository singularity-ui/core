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

const MaterialTungstenOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "3",
  width: "2",
  x: "11",
  y: "19"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "3",
  x: "2",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "3",
  x: "19",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -7.6665 17.8014)",
  width: "1.99",
  x: "16.66",
  y: "16.66"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.99",
  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -10.9791 9.8041)",
  width: "3",
  x: "4.85",
  y: "17.16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15,8.02V3H9v5.02C7.79,8.94,7,10.37,7,12c0,2.76,2.24,5,5,5s5-2.24,5-5C17,10.37,16.21,8.94,15,8.02z M11,5h2v2.1 C12.68,7.04,12.34,7,12,7s-0.68,0.04-1,0.1V5z M12,15c-1.65,0-3-1.35-3-3s1.35-3,3-3c1.65,0,3,1.35,3,3S13.65,15,12,15z"
}))));

const MaterialTungstenOutlined = (styled.default || styled)(MaterialTungstenOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialTungstenOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialTungstenOutlined;
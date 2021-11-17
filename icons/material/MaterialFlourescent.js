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

const MaterialFlourescentSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  height: "6",
  width: "14",
  x: "5",
  y: "9"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  width: "2",
  x: "11",
  y: "2"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  transform: "matrix(0.7046 -0.7096 0.7096 0.7046 1.1814 15.2381)",
  width: "2.54",
  x: "17.62",
  y: "5.2"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  width: "2",
  x: "11",
  y: "19"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "17.29,17.71 19.08,19.51 20.5,18.09 18.7,16.3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2.53",
  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -2.8904 5.4222)",
  width: "1.99",
  x: "4.1",
  y: "4.93"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  transform: "matrix(0.7096 -0.7046 0.7046 0.7096 -11.1263 8.7897)",
  width: "2.54",
  x: "3.83",
  y: "16.89"
}))));

const MaterialFlourescent = (styled.default || styled)(MaterialFlourescentSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialFlourescent.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialFlourescent;
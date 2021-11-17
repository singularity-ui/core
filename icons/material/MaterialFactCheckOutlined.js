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

const MaterialFactCheckOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z",
  "fill-rule": "evenodd"
}), /*#__PURE__*/React.createElement("polygon", {
  "fill-rule": "evenodd",
  points: "19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"
}), /*#__PURE__*/React.createElement("rect", {
  "fill-rule": "evenodd",
  height: "2",
  width: "5",
  x: "5",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  "fill-rule": "evenodd",
  height: "2",
  width: "5",
  x: "5",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  "fill-rule": "evenodd",
  height: "2",
  width: "5",
  x: "5",
  y: "15"
}))));

const MaterialFactCheckOutlined = (styled.default || styled)(MaterialFactCheckOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialFactCheckOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialFactCheckOutlined;
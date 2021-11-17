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

const MaterialEdgesensorHighTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  height: "1",
  opacity: ".3",
  width: "8",
  x: "8",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  opacity: ".3",
  width: "8",
  x: "8",
  y: "19"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16,2.01L8,2C6.9,2,6,2.9,6,4v16c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2.01,16,2.01z M16,20H8v-1h8V20z M16,17H8V7h8V17z M16,5H8V4h8V5z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "7",
  width: "2",
  x: "19",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "7",
  width: "2",
  x: "22",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "7",
  width: "2",
  x: "3",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "7",
  width: "2",
  y: "10"
}))));

const MaterialEdgesensorHighTwoTone = (styled.default || styled)(MaterialEdgesensorHighTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialEdgesensorHighTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialEdgesensorHighTwoTone;
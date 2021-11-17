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
const MaterialHeadsetOffSharpSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,4c3.87,0,7,3.13,7,7v1h-4v0.17l6,6V11c0-4.97-4.03-9-9-9C9.98,2,8.12,2.67,6.62,3.8l1.43,1.43C9.17,4.45,10.53,4,12,4 z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.1,2.1L0.69,3.51l3.33,3.33C3.37,8.09,3,9.5,3,11v9h6v-8H5v-1c0-0.94,0.19-1.83,0.52-2.65L15,17.83V20h2.17l1,1H12v2 h8.17l0.31,0.31l1.41-1.41L2.1,2.1z"
}))));
const MaterialHeadsetOffSharp = (styled.default || styled)(MaterialHeadsetOffSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialHeadsetOffSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialHeadsetOffSharp;
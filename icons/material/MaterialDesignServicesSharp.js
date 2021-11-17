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

const MaterialDesignServicesSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.79,17.06l-5.55-5.55l1.57-1.57l-3.75-3.75l-1.57,1.57L6.94,2.21L2.21,6.94l5.55,5.55L3,17.25V21h3.75l4.76-4.76 l5.55,5.55l0,0v0L21.79,17.06z M9.18,11.07L5.04,6.94l1.9-1.9l1.27,1.27L7.02,7.5l1.41,1.41l1.19-1.19l1.45,1.45L9.18,11.07z M12.93,14.82l1.9-1.9l1.45,1.45l-1.19,1.19l1.41,1.41l1.19-1.19l1.27,1.27l-1.9,1.9L12.93,14.82z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5.3",
  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 1.302 14.5981)",
  width: "3.59",
  x: "16.48",
  y: "3.08"
}))));

const MaterialDesignServicesSharp = (styled.default || styled)(MaterialDesignServicesSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialDesignServicesSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialDesignServicesSharp;
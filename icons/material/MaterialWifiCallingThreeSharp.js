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

const MaterialWifiCallingThreeSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16.49,3c-2.21,0-4.21,0.9-5.66,2.34l1.06,1.06c1.18-1.18,2.8-1.91,4.59-1.91s3.42,0.73,4.59,1.91l1.06-1.06 C20.7,3.9,18.7,3,16.49,3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.03,7.46C19.12,6.56,17.87,6,16.49,6s-2.63,0.56-3.54,1.46l1.06,1.06c0.63-0.63,1.51-1.03,2.47-1.03 s1.84,0.39,2.47,1.03L20.03,7.46z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.08,9.59L16.49,11l1.41-1.41C17.54,9.22,17.04,9,16.49,9S15.44,9.22,15.08,9.59z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,15l-5-1l-2.9,2.9c-2.5-1.43-4.57-3.5-6-6L10,8L9,3L3,3c0,3.28,0.89,6.35,2.43,9c1.58,2.73,3.85,4.99,6.57,6.57 c2.65,1.53,5.72,2.43,9,2.43L21,15z"
}))));

const MaterialWifiCallingThreeSharp = (styled.default || styled)(MaterialWifiCallingThreeSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialWifiCallingThreeSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialWifiCallingThreeSharp;
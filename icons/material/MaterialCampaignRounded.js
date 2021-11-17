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

const MaterialCampaignRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("path", {
  d: "M18,12L18,12c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2C18.45,11,18,11.45,18,12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.59,16.82c-0.33,0.44-0.24,1.05,0.2,1.37c0.53,0.39,1.09,0.81,1.62,1.21c0.44,0.33,1.06,0.24,1.38-0.2 c0-0.01,0.01-0.01,0.01-0.02c0.33-0.44,0.24-1.06-0.2-1.38c-0.53-0.4-1.09-0.82-1.61-1.21c-0.44-0.33-1.06-0.23-1.39,0.21 C16.6,16.81,16.59,16.82,16.59,16.82z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.81,4.81c0-0.01-0.01-0.01-0.01-0.02c-0.33-0.44-0.95-0.53-1.38-0.2c-0.53,0.4-1.1,0.82-1.62,1.22 c-0.44,0.33-0.52,0.95-0.19,1.38c0,0.01,0.01,0.01,0.01,0.02c0.33,0.44,0.94,0.53,1.38,0.2c0.53-0.39,1.09-0.82,1.62-1.22 C20.05,5.87,20.13,5.25,19.81,4.81z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8,9H4c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h1v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3h1l5,3V6L8,9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5,12c0-1.33-0.58-2.53-1.5-3.35v6.69C14.92,14.53,15.5,13.33,15.5,12z"
}));

const MaterialCampaignRounded = (styled.default || styled)(MaterialCampaignRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialCampaignRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCampaignRounded;
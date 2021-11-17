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

const MaterialLinkedCameraRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "13",
  r: "2.5"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16.6,2.37c2.1,0.27,3.77,1.93,4.03,4.03C20.67,6.74,20.95,7,21.29,7l0,0c0.39,0,0.71-0.34,0.66-0.73 c-0.33-2.72-2.5-4.89-5.22-5.22C16.34,1,16,1.32,16,1.71l0,0C16,2.05,16.26,2.33,16.6,2.37z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.23,6.19C18.93,5,18,4.07,16.81,3.77C16.4,3.67,16,3.99,16,4.42l0,0c0,0.29,0.19,0.57,0.48,0.64 c0.72,0.18,1.29,0.74,1.46,1.46C18.01,6.81,18.28,7,18.58,7l0,0C19.01,7,19.33,6.6,19.23,6.19z"
})), /*#__PURE__*/React.createElement("path", {
  d: "M17,8c0-1.1-0.9-2-2-2V4c0-0.55-0.45-1-1-1H9.88C9.32,3,8.78,3.24,8.4,3.65L7.17,5H4C2.9,5,2,5.9,2,7v12 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-9c0-1.1-0.9-2-2-2H17z M12,17.5c-2.48,0-4.5-2.02-4.5-4.5S9.52,8.5,12,8.5 s4.5,2.02,4.5,4.5S14.48,17.5,12,17.5z"
}))))));

const MaterialLinkedCameraRounded = (styled.default || styled)(MaterialLinkedCameraRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialLinkedCameraRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialLinkedCameraRounded;
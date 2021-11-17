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

const MaterialHdrOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 14.25V13h1.1l.72 1.59c.11.25.36.41.63.41.5 0 .83-.51.64-.96l-.49-1.14c.5-.3.9-.8.9-1.4v-1c0-.83-.67-1.5-1.5-1.5H17c-.55 0-1 .45-1 1v3.9l1.04 1.04c.27-.11.46-.38.46-.69zm0-3.75h2v1h-2v-1zm-4.5 0v.4l1.5 1.5v-1.9c0-.82-.68-1.5-1.5-1.5h-1.9l1.5 1.5h.4zm8.03 10.53l-18-18c-.29-.29-.76-.29-1.05 0-.29.29-.29.76 0 1.05l4.98 4.98c-.27.11-.46.38-.46.69V11h-2V9.75c0-.41-.34-.75-.75-.75S3 9.34 3 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75V10.1l1.5 1.5v2.9c0 .28.22.5.5.5h2.5c.12 0 .24-.01.36-.04l7.11 7.11c.29.29.76.29 1.05 0 .29-.28.29-.75.01-1.04z"
}));

const MaterialHdrOffRounded = (styled.default || styled)(MaterialHdrOffRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialHdrOffRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialHdrOffRounded;
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

const MaterialBatteryUnknownRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm1.3-5.31s-.38.42-.67.71c-.14.14-.27.31-.39.47l-.09.15c-.08.12-.14.25-.19.37-.09.22-.16.43-.16.61h-1.6c0-.42.12-.8.29-1.13.06-.11.13-.21.2-.31.03-.05.06-.11.1-.16.11-.14.23-.28.34-.4l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5-.65 0-1.21.41-1.41.99-.11.31-.39.51-.71.51-.52 0-.88-.52-.71-1.01C9.59 8.83 10.69 8 12 8c1.66 0 3 1.34 3 3 0 .66-.27 1.26-.7 1.69z"
}));

const MaterialBatteryUnknownRounded = (styled.default || styled)(MaterialBatteryUnknownRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialBatteryUnknownRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBatteryUnknownRounded;
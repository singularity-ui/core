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

const MaterialWifiTetheringRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.56-3.11-6.4-6.75-5.95-2.62.32-4.78 2.41-5.18 5.02-.33 2.15.49 4.11 1.93 5.4.48.43 1.23.33 1.56-.23l.01-.01c.24-.42.14-.93-.22-1.26-1.03-.93-1.59-2.37-1.22-3.94.33-1.42 1.48-2.57 2.9-2.91C13.65 8.49 16 10.47 16 13c0 1.18-.52 2.23-1.33 2.96-.36.32-.47.84-.23 1.26l.01.01c.31.53 1.03.69 1.5.28C17.2 16.41 18 14.8 18 13zm-7.17-9.93c-4.62.52-8.35 4.33-8.78 8.96-.35 3.7 1.32 7.02 4.02 9.01.48.35 1.16.2 1.46-.31.25-.43.14-.99-.26-1.29-2.28-1.69-3.65-4.55-3.16-7.7.54-3.5 3.46-6.29 6.98-6.68C15.91 4.51 20 8.28 20 13c0 2.65-1.29 4.98-3.27 6.44-.4.3-.51.85-.26 1.29.3.52.98.66 1.46.31C20.4 19.22 22 16.3 22 13c0-5.91-5.13-10.62-11.17-9.93z"
}));

const MaterialWifiTetheringRounded = (styled.default || styled)(MaterialWifiTetheringRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialWifiTetheringRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialWifiTetheringRounded;
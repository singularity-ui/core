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
const MaterialCalendarViewMonthTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
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
  height: "5",
  opacity: ".3",
  width: "4",
  x: "4",
  y: "6"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  opacity: ".3",
  width: "4",
  x: "4",
  y: "13"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  opacity: ".3",
  width: "4",
  x: "10",
  y: "13"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  opacity: ".3",
  width: "4",
  x: "16",
  y: "13"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  opacity: ".3",
  width: "4",
  x: "16",
  y: "6"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  opacity: ".3",
  width: "4",
  x: "10",
  y: "6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,18H4v-5h4V18z M8,11H4V6h4V11z M14,18h-4v-5h4V18z M14,11h-4V6h4V11z M20,18h-4v-5h4V18z M20,11h-4V6h4V11z"
}))));
const MaterialCalendarViewMonthTwoTone = (styled.default || styled)(MaterialCalendarViewMonthTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialCalendarViewMonthTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCalendarViewMonthTwoTone;
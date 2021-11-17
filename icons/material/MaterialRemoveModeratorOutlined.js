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
const MaterialRemoveModeratorOutlinedSvg = /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,4.14l6,2.25v4.7c0,1.19-0.23,2.36-0.64,3.44l1.51,1.51c0.72-1.53,1.13-3.22,1.13-4.95V5l-8-3L6.78,3.96l1.55,1.55 L12,4.14z M2.81,2.81L1.39,4.22L4,6.83v4.26c0,5.05,3.41,9.76,8,10.91c1.72-0.43,3.28-1.36,4.55-2.62l3.23,3.23l1.41-1.41 L2.81,2.81z M12,19.92c-3.45-1.13-6-4.82-6-8.83V8.83l9.14,9.14C14.24,18.85,13.17,19.54,12,19.92z"
})));
const MaterialRemoveModeratorOutlined = (styled.default || styled)(MaterialRemoveModeratorOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialRemoveModeratorOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialRemoveModeratorOutlined;
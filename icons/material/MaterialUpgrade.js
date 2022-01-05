import React from 'react';
import styled from 'styled-components';

const MaterialUpgradeSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16,18v2H8v-2H16z M11,7.99V16h2V7.99h3L12,4L8,7.99H11z"
})));

const MaterialUpgrade = (styled.default || styled)(MaterialUpgradeSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialUpgrade;
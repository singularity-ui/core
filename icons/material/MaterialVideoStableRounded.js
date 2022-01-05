import React from 'react';
import styled from 'styled-components';

const MaterialVideoStableRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19.96,4.01h-16c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-12C21.96,4.91,21.06,4.01,19.96,4.01z M20,6v12 H4V6H20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.42,9.01L7.92,6.18C7.39,6.04,6.84,6.35,6.7,6.88l-1.85,6.87c-0.14,0.53,0.17,1.08,0.71,1.23l10.5,2.83 c0.53,0.14,1.08-0.17,1.23-0.71l1.85-6.87C19.27,9.7,18.95,9.15,18.42,9.01z"
}))));

const MaterialVideoStableRounded = (styled.default || styled)(MaterialVideoStableRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialVideoStableRounded;
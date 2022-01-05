import React from 'react';
import styled from 'styled-components';

const MaterialSyncAltTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M22,8l-4-4v3H3v2h15v3L22,8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2,16l4,4v-3h15v-2H6v-3L2,16z"
}))));

const MaterialSyncAltTwoTone = (styled.default || styled)(MaterialSyncAltTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSyncAltTwoTone;
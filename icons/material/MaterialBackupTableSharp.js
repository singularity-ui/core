import React from 'react';
import styled from 'styled-components';

const MaterialBackupTableSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "20,6 20,20 6,20 6,22 22,22 22,6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,2H2v16h16V2z M9,16H4v-5h5V16z M16,16h-5v-5h5V16z M16,9H4V4h12V9z"
}))));

const MaterialBackupTableSharp = (styled.default || styled)(MaterialBackupTableSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBackupTableSharp;
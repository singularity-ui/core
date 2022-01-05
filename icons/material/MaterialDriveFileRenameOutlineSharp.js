import React from 'react';
import styled from 'styled-components';

const MaterialDriveFileRenameOutlineSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  points: "15,16 11,20 21,20 21,16"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "12.06,7.19 3,16.25 3,20 6.75,20 15.81,10.94"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5.3",
  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 8.257289e-03 13.4765)",
  width: "3.59",
  x: "14.48",
  y: "4.08"
}))));

const MaterialDriveFileRenameOutlineSharp = (styled.default || styled)(MaterialDriveFileRenameOutlineSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDriveFileRenameOutlineSharp;
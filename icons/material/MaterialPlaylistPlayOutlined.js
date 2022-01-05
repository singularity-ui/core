import React from 'react';
import styled from 'styled-components';

const MaterialPlaylistPlayOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "11",
  x: "3",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "11",
  x: "3",
  y: "6"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "7",
  x: "3",
  y: "14"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "16,13 16,21 22,17"
}))));

const MaterialPlaylistPlayOutlined = (styled.default || styled)(MaterialPlaylistPlayOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPlaylistPlayOutlined;
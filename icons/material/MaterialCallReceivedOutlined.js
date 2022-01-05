import React from 'react';
import styled from 'styled-components';

const MaterialCallReceivedOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z"
}));

const MaterialCallReceivedOutlined = (styled.default || styled)(MaterialCallReceivedOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCallReceivedOutlined;
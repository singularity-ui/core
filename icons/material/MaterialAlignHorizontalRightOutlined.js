import React from 'react';
import styled from 'styled-components';

const MaterialAlignHorizontalRightOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,2h2v20h-2V2z M2,10h16V7H2V10z M8,17h10v-3H8V17z"
}));

const MaterialAlignHorizontalRightOutlined = (styled.default || styled)(MaterialAlignHorizontalRightOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAlignHorizontalRightOutlined;
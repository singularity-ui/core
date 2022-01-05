import React from 'react';
import styled from 'styled-components';

const MaterialHorizontalDistributeOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M4,22H2V2h2V22z M22,2h-2v20h2V2z M13.5,7h-3v10h3V7z"
}));

const MaterialHorizontalDistributeOutlined = (styled.default || styled)(MaterialHorizontalDistributeOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialHorizontalDistributeOutlined;
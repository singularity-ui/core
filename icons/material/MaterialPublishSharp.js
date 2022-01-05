import React from 'react';
import styled from 'styled-components';

const MaterialPublishSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"
}));

const MaterialPublishSharp = (styled.default || styled)(MaterialPublishSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPublishSharp;
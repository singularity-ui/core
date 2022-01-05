import React from 'react';
import styled from 'styled-components';

const MaterialUploadSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"
}));

const MaterialUploadSharp = (styled.default || styled)(MaterialUploadSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialUploadSharp;
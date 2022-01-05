import React from 'react';
import styled from 'styled-components';

const MaterialBookmarkRemoveSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21,7h-6V5h6V7z M19,10.9c-0.64,0.13-1.32,0.14-2.02,0c-1.91-0.38-3.47-1.92-3.87-3.83C12.79,5.54,13.18,4.1,14,3L5,3v18 l7-3l7,3V10.9z"
}));

const MaterialBookmarkRemoveSharp = (styled.default || styled)(MaterialBookmarkRemoveSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBookmarkRemoveSharp;
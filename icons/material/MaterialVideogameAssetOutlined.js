import React from 'react';
import styled from 'styled-components';

const MaterialVideogameAssetOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14.5",
  cy: "13.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18.5",
  cy: "10.5",
  r: "1.5"
}));

const MaterialVideogameAssetOutlined = (styled.default || styled)(MaterialVideogameAssetOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialVideogameAssetOutlined;
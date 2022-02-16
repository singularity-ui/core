import React from 'react';
import styled from 'styled-components';

const MaterialFunctionsSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"
}));

const MaterialFunctions = (styled.default || styled)(MaterialFunctionsSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFunctions;
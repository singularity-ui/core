import React from 'react';
import styled from 'styled-components';

const MaterialTransitEnterexitSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z"
}));

const MaterialTransitEnterexitSharp = (styled.default || styled)(MaterialTransitEnterexitSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTransitEnterexitSharp;
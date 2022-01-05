import React from 'react';
import styled from 'styled-components';

const MaterialStayCurrentLandscapeSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 19h22V5H1v14zM19 7v10H5V7h14z"
}));

const MaterialStayCurrentLandscapeSharp = (styled.default || styled)(MaterialStayCurrentLandscapeSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialStayCurrentLandscapeSharp;
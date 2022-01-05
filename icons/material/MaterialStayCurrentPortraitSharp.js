import React from 'react';
import styled from 'styled-components';

const MaterialStayCurrentPortraitSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 1.01L5.01 1v22H19V1.01zM17 19H7V5h10v14z"
}));

const MaterialStayCurrentPortraitSharp = (styled.default || styled)(MaterialStayCurrentPortraitSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialStayCurrentPortraitSharp;
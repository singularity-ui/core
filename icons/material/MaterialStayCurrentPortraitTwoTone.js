import React from 'react';
import styled from 'styled-components';

const MaterialStayCurrentPortraitTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 5h10v14H7z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"
}));

const MaterialStayCurrentPortraitTwoTone = (styled.default || styled)(MaterialStayCurrentPortraitTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialStayCurrentPortraitTwoTone;
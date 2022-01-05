import React from 'react';
import styled from 'styled-components';

const MaterialArrowRightSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M10 17l5-5-5-5v10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 24V0h24v24H0z",
  fill: "none"
}));

const MaterialArrowRight = (styled.default || styled)(MaterialArrowRightSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialArrowRight;
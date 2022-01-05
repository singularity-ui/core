import React from 'react';
import styled from 'styled-components';

const MaterialNearMeSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"
}));

const MaterialNearMe = (styled.default || styled)(MaterialNearMeSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNearMe;
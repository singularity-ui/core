import React from 'react';
import styled from 'styled-components';

const MaterialBeenhereRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66l7.57 5.04c.34.22.77.22 1.11 0l7.56-5.04c.53-.36.88-.97.88-1.66V3c0-1.1-.9-2-2-2zm-.7 6.7l-7.59 7.59c-.39.39-1.02.39-1.41 0L5.71 11.7c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0L10 13.17l6.88-6.88c.39-.39 1.02-.39 1.41 0s.4 1.02.01 1.41z"
}));

const MaterialBeenhereRounded = (styled.default || styled)(MaterialBeenhereRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBeenhereRounded;
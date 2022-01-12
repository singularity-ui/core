import React from 'react';
import styled from 'styled-components';

const MaterialFastRewindSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"
}));

const MaterialFastRewind = (styled.default || styled)(MaterialFastRewindSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFastRewind;
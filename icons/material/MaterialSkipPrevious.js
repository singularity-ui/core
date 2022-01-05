import React from 'react';
import styled from 'styled-components';

const MaterialSkipPreviousSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 6h2v12H6zm3.5 6l8.5 6V6z"
}));

const MaterialSkipPrevious = (styled.default || styled)(MaterialSkipPreviousSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSkipPrevious;
import React from 'react';
import styled from 'styled-components';

const MaterialFirstPageSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 24H0V0h24v24z",
  fill: "none"
}));

const MaterialFirstPage = (styled.default || styled)(MaterialFirstPageSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFirstPage;
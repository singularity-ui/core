import React from 'react';
import styled from 'styled-components';

const MaterialTenKSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 10.5h1.5v3H10zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 15H6v-4.5H4.5V9h3v6zm5.5-1c0 .55-.45 1-1 1H9.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H12c.55 0 1 .45 1 1v4zm6.5 1h-1.75L16 12.75V15h-1.5V9H16v2.25L17.75 9h1.75l-2.25 3 2.25 3z"
}));

const MaterialTenK = (styled.default || styled)(MaterialTenKSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialTenK;
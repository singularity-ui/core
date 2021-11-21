import React from 'react';
import styled from 'styled-components';

const MaterialSubdirectoryArrowRightTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M24 24H0V0h24v24z",
  fill: "none",
  opacity: ".87"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"
}));

const MaterialSubdirectoryArrowRightTwoTone = (styled.default || styled)(MaterialSubdirectoryArrowRightTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSubdirectoryArrowRightTwoTone;
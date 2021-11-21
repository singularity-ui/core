import React from 'react';
import styled from 'styled-components';

const MaterialPlaylistPlayRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 10h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0-4h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 8h6c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm9 .88v4.23c0 .39.42.63.76.43l3.53-2.12c.32-.19.32-.66 0-.86l-3.53-2.12c-.34-.19-.76.05-.76.44z"
}));

const MaterialPlaylistPlayRounded = (styled.default || styled)(MaterialPlaylistPlayRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPlaylistPlayRounded;
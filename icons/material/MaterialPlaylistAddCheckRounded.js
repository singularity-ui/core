import React from 'react';
import styled from 'styled-components';

const MaterialPlaylistAddCheckRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M13 10H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM3 16h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm19.21-3.79l.09.09c.39.39.39 1.02 0 1.41l-5.58 5.59c-.39.39-1.02.39-1.41 0l-3.09-3.09c-.39-.39-.39-1.02 0-1.41l.09-.09c.39-.39 1.02-.39 1.41 0l2.3 2.3 4.78-4.79c.38-.4 1.02-.4 1.41-.01z"
}));

const MaterialPlaylistAddCheckRounded = (styled.default || styled)(MaterialPlaylistAddCheckRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPlaylistAddCheckRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialLooksFourTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M.04 0h24v24h-24V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.04 19h14V5h-14v14zm4-12h2v4h2V7h2v10h-2v-4h-4V7z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-14V5h14v14zm-6-2h2V7h-2v4h-2V7h-2v6h4z"
}));

const MaterialLooksFourTwoTone = (styled.default || styled)(MaterialLooksFourTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLooksFourTwoTone;
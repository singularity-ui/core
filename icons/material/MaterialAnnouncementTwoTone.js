import React from 'react';
import styled from 'styled-components';

const MaterialAnnouncementTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 4v13.17l.59-.59.58-.58H20V4H4zm9 11h-2v-2h2v2zm0-4h-2V5h2v6z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM11 5h2v6h-2zm0 8h2v2h-2z"
}));

const MaterialAnnouncementTwoTone = (styled.default || styled)(MaterialAnnouncementTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAnnouncementTwoTone;
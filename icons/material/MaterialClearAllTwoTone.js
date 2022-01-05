import React from 'react';
import styled from 'styled-components';

const MaterialClearAllTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z"
}));

const MaterialClearAllTwoTone = (styled.default || styled)(MaterialClearAllTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialClearAllTwoTone;
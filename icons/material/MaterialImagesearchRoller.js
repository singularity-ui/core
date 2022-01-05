import React from 'react';
import styled from 'styled-components';

const MaterialImagesearchRollerSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2"
}));

const MaterialImagesearchRoller = (styled.default || styled)(MaterialImagesearchRollerSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialImagesearchRoller;
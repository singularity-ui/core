import React from 'react';
import styled from 'styled-components';

const MaterialEqualizerSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"
}));

const MaterialEqualizer = (styled.default || styled)(MaterialEqualizerSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialEqualizer;
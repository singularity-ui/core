import React from 'react';
import styled from 'styled-components';

const MaterialPublishTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.83 12H11v6h2v-6h1.17L12 9.83z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 4h14v2H5zm7 3l-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2v-6H9.83L12 9.83 14.17 12H13z"
}));

const MaterialPublishTwoTone = (styled.default || styled)(MaterialPublishTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPublishTwoTone;
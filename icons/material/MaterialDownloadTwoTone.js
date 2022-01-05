import React from 'react';
import styled from 'styled-components';

const MaterialDownloadTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 9V5h-2v6H9.83L12 13.17 14.17 11H13z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 9V3H9v6H5l7 7 7-7h-4zm-3 4.17L9.83 11H11V5h2v6h1.17L12 13.17zM5 18h14v2H5z"
}));

const MaterialDownloadTwoTone = (styled.default || styled)(MaterialDownloadTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDownloadTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialAutoAwesomeMosaicTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "14",
  opacity: ".3",
  width: "4",
  x: "5",
  y: "5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  opacity: ".3",
  width: "4",
  x: "15",
  y: "15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  opacity: ".3",
  width: "4",
  x: "15",
  y: "5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,5v14c0,1.1,0.89,2,2,2h6V3H5C3.89,3,3,3.9,3,5z M9,19H5V5h4V19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,3h-6v8h8V5C21,3.9,20.1,3,19,3z M19,9h-4V5h4V9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,21h6c1.1,0,2-0.9,2-2v-6h-8V21z M15,15h4v4h-4V15z"
}))));

const MaterialAutoAwesomeMosaicTwoTone = (styled.default || styled)(MaterialAutoAwesomeMosaicTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAutoAwesomeMosaicTwoTone;
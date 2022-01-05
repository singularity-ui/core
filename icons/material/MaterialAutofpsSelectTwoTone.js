import React from 'react';
import styled from 'styled-components';

const MaterialAutofpsSelectTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "12.03,6.3 11.97,6.3 10.95,9.19 13.05,9.19"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  width: "2",
  x: "3",
  y: "17"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,15c3.31,0,6-2.69,6-6s-2.69-6-6-6S6,5.69,6,9S8.69,15,12,15z M11.37,5h1.25l2.63,7h-1.21l-0.63-1.79h-2.83L9.96,12 H8.74L11.37,5z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  width: "2",
  x: "7",
  y: "17"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  width: "2",
  x: "11",
  y: "17"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  width: "6",
  x: "15",
  y: "17"
}))));

const MaterialAutofpsSelectTwoTone = (styled.default || styled)(MaterialAutofpsSelectTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAutofpsSelectTwoTone;
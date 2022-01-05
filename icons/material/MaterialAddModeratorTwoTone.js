import React from 'react';
import styled from 'styled-components';

const MaterialAddModeratorTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,4.14L6,6.39v4.7c0,3.33,1.76,6.44,4.33,8.04c-1.56-4.89,2.5-9.8,7.67-9.05V6.39L12,4.14z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.33,19.13C7.76,17.53,6,14.42,6,11.09v-4.7l6-2.25l6,2.25v3.69c0.71,0.1,1.38,0.31,2,0.6V5l-8-3L4,5v6.09 c0,5.05,3.41,9.76,8,10.91c0.03-0.01,0.05-0.02,0.08-0.02C11.29,21.19,10.68,20.22,10.33,19.13z"
})), /*#__PURE__*/React.createElement("path", {
  d: "M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S19.76,12,17,12z M20,17.5h-2.5V20h-1v-2.5H14v-1h2.5V14h1v2.5H20V17.5z"
}))));

const MaterialAddModeratorTwoTone = (styled.default || styled)(MaterialAddModeratorTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAddModeratorTwoTone;
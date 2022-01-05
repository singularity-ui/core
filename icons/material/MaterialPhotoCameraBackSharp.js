import React from 'react';
import styled from 'styled-components';

const MaterialPhotoCameraBackSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16.83,5L15,3H9L7.17,5H2v16h20V5H16.83z M6,17l3-4l2.25,3l3-4L18,17H6z"
})));

const MaterialPhotoCameraBackSharp = (styled.default || styled)(MaterialPhotoCameraBackSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPhotoCameraBackSharp;
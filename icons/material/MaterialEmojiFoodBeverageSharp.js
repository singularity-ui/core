import React from 'react';
import styled from 'styled-components';

const MaterialEmojiFoodBeverageSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "18",
  x: "2",
  y: "19"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,3H9v2.4L11,7v5H6V7l2-1.6V3H4v14h14v-7h2c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,8h-2V5h2V8z"
}))));

const MaterialEmojiFoodBeverageSharp = (styled.default || styled)(MaterialEmojiFoodBeverageSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialEmojiFoodBeverageSharp;
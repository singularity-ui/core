import React from 'react';
import styled from 'styled-components';

const MaterialTakeoutDiningSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  points: "22,7.46 20.59,6.05 19,7.63 19.03,7.07 14.98,3 9.02,3 4.97,7.07 5,7.57 3.41,6.01 2,7.44 4.66,10 19.35,10"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "5.93,20 18.07,20 18.7,11.55 5.3,11.55"
}))));

const MaterialTakeoutDiningSharp = (styled.default || styled)(MaterialTakeoutDiningSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTakeoutDiningSharp;
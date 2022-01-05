import React from 'react';
import styled from 'styled-components';

const MaterialPriceCheckSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "11,8 6,8 6,6 11,6 11,4 8.5,4 8.5,3 6.5,3 6.5,4 4,4 4,10 9,10 9,12 4,12 4,14 6.5,14 6.5,15 8.5,15 8.5,14 11,14"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "19.59,12.52 13.93,18.17 11.1,15.34 9.69,16.76 13.93,21 21,13.93"
}))));

const MaterialPriceCheckSharp = (styled.default || styled)(MaterialPriceCheckSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPriceCheckSharp;
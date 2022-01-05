import React from 'react';
import styled from 'styled-components';

const MaterialAccountBalanceSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "7",
  width: "3",
  x: "4",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "7",
  width: "3",
  x: "10.5",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  width: "20",
  x: "2",
  y: "19"
}), /*#__PURE__*/React.createElement("rect", {
  height: "7",
  width: "3",
  x: "17",
  y: "10"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "12,1 2,6 2,8 22,8 22,6"
}))));

const MaterialAccountBalance = (styled.default || styled)(MaterialAccountBalanceSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAccountBalance;
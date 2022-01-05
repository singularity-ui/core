import React from 'react';
import styled from 'styled-components';

const MaterialDirectionsRailwayFilledOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,2C8,2,4,2.5,4,6v9.5C4,17.43,5.57,19,7.5,19L6,20v1h12v-1l-1.5-1c1.93,0,3.5-1.57,3.5-3.5V6C20,2.5,16.42,2,12,2z M12,4c3.71,0,5.13,0.46,5.67,1H6.43C7.03,4.48,8.48,4,12,4z M18,15.5c0,0.83-0.67,1.5-1.5,1.5h-9C6.67,17,6,16.33,6,15.5V12h12 V15.5z M18,10H6V7h12V10z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "14.5",
  r: "1.5"
}))));

const MaterialDirectionsRailwayFilledOutlined = (styled.default || styled)(MaterialDirectionsRailwayFilledOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDirectionsRailwayFilledOutlined;
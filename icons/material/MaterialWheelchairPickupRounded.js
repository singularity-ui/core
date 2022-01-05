import React from 'react';
import styled from 'styled-components';

const MaterialWheelchairPickupRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5,4c0-1.11,0.89-2,2-2s2,0.89,2,2s-0.89,2-2,2S4.5,5.11,4.5,4z M10,10.95V9c0-1.1-0.9-2-2-2H5C3.9,7,3,7.9,3,9v5 c0,0.55,0.45,1,1,1h1v6c0,0.55,0.45,1,1,1h2.5v-0.11c-1.24-1.26-2-2.99-2-4.89C6.5,14.42,7.91,12.16,10,10.95z M16.5,17 c0,1.65-1.35,3-3,3s-3-1.35-3-3c0-1.11,0.61-2.06,1.5-2.58v-2.16C9.98,12.9,8.5,14.77,8.5,17c0,2.76,2.24,5,5,5s5-2.24,5-5H16.5z M19,14h-4V9c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v6c0,0.55,0.45,1,1,1h4.46l1.92,2.88c0.31,0.46,0.93,0.58,1.39,0.28h0 c0.46-0.31,0.58-0.93,0.28-1.39l-2.21-3.32C19.65,14.17,19.33,14,19,14z"
})));

const MaterialWheelchairPickupRounded = (styled.default || styled)(MaterialWheelchairPickupRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialWheelchairPickupRounded;
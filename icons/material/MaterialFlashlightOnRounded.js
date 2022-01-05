import React from 'react';
import styled from 'styled-components';

const MaterialFlashlightOnRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6,4v1h12V4c0-1.1-0.9-2-2-2H8C6.9,2,6,2.9,6,4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6,7v1l2,3v9c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-9l2-3V7H6z M12,15.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5S12.83,15.5,12,15.5z"
}))));

const MaterialFlashlightOnRounded = (styled.default || styled)(MaterialFlashlightOnRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFlashlightOnRounded;
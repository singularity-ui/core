import React from 'react';
import styled from 'styled-components';

const MaterialScreenshotRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17,1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1.01,17,1.01z M17,18H7V6h10V18z M9.5,8.5h1.75C11.66,8.5,12,8.16,12,7.75v0C12,7.34,11.66,7,11.25,7h-2.5C8.34,7,8,7.34,8,7.75v2.5C8,10.66,8.34,11,8.75,11h0 c0.41,0,0.75-0.34,0.75-0.75V8.5z M12.75,17h2.5c0.41,0,0.75-0.34,0.75-0.75v-2.5c0-0.41-0.34-0.75-0.75-0.75h0 c-0.41,0-0.75,0.34-0.75,0.75v1.75h-1.75c-0.41,0-0.75,0.34-0.75,0.75l0,0C12,16.66,12.34,17,12.75,17z"
}))));

const MaterialScreenshotRounded = (styled.default || styled)(MaterialScreenshotRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialScreenshotRounded;
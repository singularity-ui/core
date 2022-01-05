import React from 'react';
import styled from 'styled-components';

const MaterialSendToMobileOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,8l4,4l-4,4l-1.41-1.41L18.17,13H13v-2h5.17l-1.59-1.59L18,8z M7,1.01L17,1c1.1,0,2,0.9,2,2v4h-2V6H7v12h10v-1h2v4 c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V3C5,1.9,5.9,1.01,7,1.01z M7,21h10v-1H7V21z M7,4h10V3H7V4z"
}))));

const MaterialSendToMobileOutlined = (styled.default || styled)(MaterialSendToMobileOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSendToMobileOutlined;
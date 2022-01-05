import React from 'react';
import styled from 'styled-components';

const MaterialMarkChatReadOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,18l-6,0l-4,4V4c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v7l-2,0V4H4v12l8,0V18z M23,14.34l-1.41-1.41l-4.24,4.24l-2.12-2.12 l-1.41,1.41L17.34,20L23,14.34z"
})));

const MaterialMarkChatReadOutlined = (styled.default || styled)(MaterialMarkChatReadOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialMarkChatReadOutlined;
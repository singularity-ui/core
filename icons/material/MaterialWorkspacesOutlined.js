import React from 'react';
import styled from 'styled-components';

const MaterialWorkspacesOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6,15c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S4.9,15,6,15 M6,13c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S8.2,13,6,13z M12,5 c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,5,12,5 M12,3C9.8,3,8,4.8,8,7s1.8,4,4,4s4-1.8,4-4S14.2,3,12,3z M18,15 c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S16.9,15,18,15 M18,13c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S20.2,13,18,13z"
}))));

const MaterialWorkspacesOutlined = (styled.default || styled)(MaterialWorkspacesOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialWorkspacesOutlined;
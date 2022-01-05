import React from 'react';
import styled from 'styled-components';

const MaterialBuildCircleTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8c4.41,0,8-3.59,8-8C20,7.59,16.41,4,12,4z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 c0-4.41,3.59-8,8-8c4.41,0,8,3.59,8,8C20,16.41,16.41,20,12,20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.68,7.76c-1.11-1.11-2.79-1.3-4.1-0.59l2.35,2.35l-1.41,1.41L7.17,8.58c-0.71,1.32-0.52,2.99,0.59,4.1 c0.98,0.98,2.4,1.24,3.62,0.81l3.41,3.41c0.2,0.2,0.51,0.2,0.71,0l1.4-1.4c0.2-0.2,0.2-0.51,0-0.71l-3.41-3.41 C13.92,10.15,13.66,8.74,12.68,7.76z"
}))));

const MaterialBuildCircleTwoTone = (styled.default || styled)(MaterialBuildCircleTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBuildCircleTwoTone;
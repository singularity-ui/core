import React from 'react';
import styled from 'styled-components';

const MaterialFlakyOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M14.05,17.58l-0.01,0.01l-2.4-2.4l1.06-1.06l1.35,1.35L16.54,13l1.06,1.06 l-3.54,3.54L14.05,17.58z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M7.34,6.28l1.41,1.41l1.41-1.41 l1.06,1.06L9.81,8.75l1.41,1.41l-1.06,1.06L8.75,9.81l-1.41,1.41l-1.06-1.06l1.41-1.41L6.28,7.34L7.34,6.28z M12,20 c-2.2,0-4.2-0.9-5.7-2.3L17.7,6.3C19.1,7.8,20,9.8,20,12C20,16.4,16.4,20,12,20z",
  "fill-rule": "evenodd"
})));

const MaterialFlakyOutlined = (styled.default || styled)(MaterialFlakyOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFlakyOutlined;
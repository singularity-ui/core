import React from 'react';
import styled from 'styled-components';

const MaterialUploadFileTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M13,4H6v16h12V9h-5V4z M16,15h-3v4h-2v-4H8l4.01-4L16,15z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8,15 11,15 11,19 13,19 13,15 16,15 12.01,11"
}))));

const MaterialUploadFileTwoTone = (styled.default || styled)(MaterialUploadFileTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialUploadFileTwoTone;
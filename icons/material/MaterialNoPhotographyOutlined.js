import React from 'react';
import styled from 'styled-components';

const MaterialNoPhotographyOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M8.9,6.07L7.48,4.66L9,3h6l1.83,2H20c1.1,0,2,0.9,2,2v12c0,0.05-0.01,0.1-0.02,0.16L20,17.17V7h-4.05l-1.83-2H9.88 L8.9,6.07z M20.49,23.31L18.17,21H4c-1.1,0-2-0.9-2-2V7c0-0.59,0.27-1.12,0.68-1.49l-2-2L2.1,2.1l19.8,19.8L20.49,23.31z M9.19,12.02C9.08,12.33,9,12.65,9,13c0,1.66,1.34,3,3,3c0.35,0,0.67-0.08,0.98-0.19L9.19,12.02z M16.17,19l-1.68-1.68 C13.76,17.75,12.91,18,12,18c-2.76,0-5-2.24-5-5c0-0.91,0.25-1.76,0.68-2.49L4.17,7H4v12H16.17z M14.81,11.98l2.07,2.07 C16.96,13.71,17,13.36,17,13c0-2.76-2.24-5-5-5c-0.36,0-0.71,0.04-1.06,0.12l2.07,2.07C13.85,10.49,14.51,11.15,14.81,11.98z"
}))));

const MaterialNoPhotographyOutlined = (styled.default || styled)(MaterialNoPhotographyOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNoPhotographyOutlined;
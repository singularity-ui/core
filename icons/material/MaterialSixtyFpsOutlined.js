import React from 'react';
import styled from 'styled-components';

const MaterialSixtyFpsOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,8v8h-4V8H19 M19,5h-4c-1.66,0-3,1.34-3,3v8c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3V8C22,6.34,20.66,5,19,5z M10,8V5H5 C3.34,5,2,6.34,2,8v8c0,1.66,1.34,3,3,3h3c1.66,0,3-1.34,3-3v-3c0-1.66-1.34-3-3-3H5V8H10z M8,13v3H5v-3H8z"
}))));

const MaterialSixtyFpsOutlined = (styled.default || styled)(MaterialSixtyFpsOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSixtyFpsOutlined;
import React from 'react';
import styled from 'styled-components';

const MaterialRMobiledataSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7.8,7.2L9,10H7L5.87,7.33H4V10H2V2h7v5.2H7.8z M7,4H4v1.33h3V4z"
}))));

const MaterialRMobiledataSharp = (styled.default || styled)(MaterialRMobiledataSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialRMobiledataSharp;
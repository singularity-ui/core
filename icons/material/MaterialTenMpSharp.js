import React from 'react';
import styled from 'styled-components';

const MaterialTenMpSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M13.5,7H15v3h-1.5V7z M21,3H3v18h18V3z M12.5,18.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5V18.5z M15,18.5h-1.5v-6H18V17h-3 V18.5z M10,5.5v6H8.5V7H7V5.5H10z M16.5,5.5v6H12v-6H16.5z M15,14h1.5v1.5H15V14z"
}))));

const MaterialTenMpSharp = (styled.default || styled)(MaterialTenMpSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTenMpSharp;
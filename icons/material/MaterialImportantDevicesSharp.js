import React from 'react';
import styled from 'styled-components';

const MaterialImportantDevicesSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 11.01L17 11v11h7V11.01zM23 20h-5v-7h5v7zM22 2H0v16h9v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V2zM11.97 9L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"
}));

const MaterialImportantDevicesSharp = (styled.default || styled)(MaterialImportantDevicesSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialImportantDevicesSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialSignalCellularNullSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"
}));

const MaterialSignalCellularNullSharp = (styled.default || styled)(MaterialSignalCellularNullSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSignalCellularNullSharp;
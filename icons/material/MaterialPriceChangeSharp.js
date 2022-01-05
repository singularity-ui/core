import React from 'react';
import styled from 'styled-components';

const MaterialPriceChangeSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M2,4v16h20V4H2z M12,10H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2V10z M16,16.25l-2-2h4L16,16.25z M14,10l2-2l2,2H14z"
})));

const MaterialPriceChangeSharp = (styled.default || styled)(MaterialPriceChangeSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPriceChangeSharp;
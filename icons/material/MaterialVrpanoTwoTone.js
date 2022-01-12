import React from 'react';
import styled from 'styled-components';

const MaterialVrpanoTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M4,6.38v11.25c2.01-0.59,4.61-1.13,8-1.13c3.38,0,5.99,0.54,8,1.13V6.37 c-2.01,0.59-4.62,1.13-8,1.13C9.32,7.5,6.58,7.11,4,6.38z M18.51,15.4C16.52,15.15,14.3,15,12,15c-2.34,0-4.52,0.15-6.52,0.41 l3.69-4.42l2,2.4L14,10L18.51,15.4z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.01,4C20.45,4,17.4,5.5,12,5.5c-5.31,0-8.49-1.49-9.01-1.49C2.46,4.01,2,4.45,2,5.02V19c0,0.57,0.46,1,0.99,1 c0.57,0,3.55-1.5,9.01-1.5c5.42,0,8.44,1.5,9.01,1.5c0.53,0,0.99-0.43,0.99-1V5C22,4.43,21.54,4,21.01,4z M20,17.63 c-2.01-0.59-4.62-1.13-8-1.13c-3.39,0-5.99,0.54-8,1.13V6.38C6.58,7.11,9.32,7.5,12,7.5c3.38,0,5.99-0.54,8-1.13V17.63z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.17,10.99l-3.69,4.42C7.48,15.15,9.66,15,12,15c2.3,0,4.52,0.15,6.51,0.4L14,10l-2.83,3.39L9.17,10.99z"
}))));

const MaterialVrpanoTwoTone = (styled.default || styled)(MaterialVrpanoTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialVrpanoTwoTone;
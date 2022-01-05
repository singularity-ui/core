import React from 'react';
import styled from 'styled-components';

const MaterialQuestionAnswerSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 6h-3v9H6v3h12l4 4V6zm-5 7V2H2v15l4-4h11z"
}));

const MaterialQuestionAnswerSharp = (styled.default || styled)(MaterialQuestionAnswerSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialQuestionAnswerSharp;
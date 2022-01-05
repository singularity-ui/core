import React from 'react';
import styled from 'styled-components';

const MaterialArrowRightAltSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
}));

const MaterialArrowRightAlt = (styled.default || styled)(MaterialArrowRightAltSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialArrowRightAlt;
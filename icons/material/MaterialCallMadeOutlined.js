import React from 'react';
import styled from 'styled-components';

const MaterialCallMadeOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
}));

const MaterialCallMadeOutlined = (styled.default || styled)(MaterialCallMadeOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCallMadeOutlined;
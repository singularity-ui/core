import React from 'react';
import styled from 'styled-components';

const MaterialArrowRightAltOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
}));

const MaterialArrowRightAltOutlined = (styled.default || styled)(MaterialArrowRightAltOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialArrowRightAltOutlined;
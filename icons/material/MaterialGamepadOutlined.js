import React from 'react';
import styled from 'styled-components';

const MaterialGamepadOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5l-3 3V22h6v-5.5l-3-3z"
}));

const MaterialGamepadOutlined = (styled.default || styled)(MaterialGamepadOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialGamepadOutlined;
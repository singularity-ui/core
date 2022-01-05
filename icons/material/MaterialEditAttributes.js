import React from 'react';
import styled from 'styled-components';

const MaterialEditAttributesSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  class: "st0",
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5zM7.24 14.46l-2.57-2.57.7-.7 1.87 1.87 3.52-3.52.7.7-4.22 4.22z"
}));

const MaterialEditAttributes = (styled.default || styled)(MaterialEditAttributesSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialEditAttributes;
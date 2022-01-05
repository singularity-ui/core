import React from 'react';
import styled from 'styled-components';

const MaterialNavigationSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
}));

const MaterialNavigation = (styled.default || styled)(MaterialNavigationSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNavigation;
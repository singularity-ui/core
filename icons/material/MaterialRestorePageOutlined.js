import React from 'react';
import styled from 'styled-components';

const MaterialRestorePageOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7.17L18 8.83V20zm-9.55-9.43L7.28 9.4V13h3.6l-1.44-1.44c.52-1.01 1.58-1.71 2.79-1.71 1.74 0 3.15 1.41 3.15 3.15s-1.41 3.15-3.15 3.15c-1.07 0-2.02-.54-2.58-1.35H8.1c.69 1.58 2.28 2.7 4.12 2.7 2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5c-1.59 0-2.97.83-3.77 2.07z"
}));

const MaterialRestorePageOutlined = (styled.default || styled)(MaterialRestorePageOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialRestorePageOutlined;
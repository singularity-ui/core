import React from 'react';
import styled from 'styled-components';

const MaterialLocalPizzaTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.51 6.36L12 17.92l6.49-11.55C16.68 4.85 14.38 4 12 4s-4.68.85-6.49 2.36zM9 8.5c-.83 0-1.5-.67-1.5-1.5S8.17 5.5 9 5.5s1.5.67 1.5 1.5S9.82 8.5 9 8.5zm4.5 4.5c0 .83-.68 1.5-1.5 1.5-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zm0 15.92L5.51 6.36C7.32 4.85 9.62 4 12 4s4.68.85 6.49 2.36L12 17.92zM9 5.5c-.83 0-1.5.67-1.5 1.5S8.17 8.5 9 8.5s1.5-.67 1.5-1.5S9.82 5.5 9 5.5zm1.5 7.5c0 .83.67 1.5 1.5 1.5.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5-1.5.67-1.5 1.5z"
}));

const MaterialLocalPizzaTwoTone = (styled.default || styled)(MaterialLocalPizzaTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLocalPizzaTwoTone;
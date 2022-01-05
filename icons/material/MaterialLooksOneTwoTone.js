import React from 'react';
import styled from 'styled-components';

const MaterialLooksOneTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 5H5v14h14V5zm-5 12h-2V9h-2V7h4v10z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm5 4h2v8h2V7h-4z"
}));

const MaterialLooksOneTwoTone = (styled.default || styled)(MaterialLooksOneTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLooksOneTwoTone;
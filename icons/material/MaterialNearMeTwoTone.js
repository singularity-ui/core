import React from 'react';
import styled from 'styled-components';

const MaterialNearMeTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.39 12.61l.32.83 1.32 3.42 4.24-10.13-10.13 4.24 3.42 1.33z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 11.51l6.84 2.65L12.48 21h.98L21 3 3 10.53v.98zm14.27-4.78l-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23z"
}));

const MaterialNearMeTwoTone = (styled.default || styled)(MaterialNearMeTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNearMeTwoTone;
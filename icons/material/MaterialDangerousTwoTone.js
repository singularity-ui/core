import React from 'react';
import styled from 'styled-components';

const MaterialDangerousTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M9.1,5L5,9.1v5.8L9.1,19h5.8l4.1-4.1V9.1L14.9,5H9.1z M16.24,14.83l-1.41,1.41 L12,13.41l-2.83,2.83l-1.41-1.41L10.59,12L7.76,9.17l1.41-1.41L12,10.59l2.83-2.83l1.41,1.41L13.41,12L16.24,14.83z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z M14.83,7.76L12,10.59L9.17,7.76L7.76,9.17L10.59,12l-2.83,2.83l1.41,1.41L12,13.41l2.83,2.83l1.41-1.41L13.41,12l2.83-2.83 L14.83,7.76z"
})));

const MaterialDangerousTwoTone = (styled.default || styled)(MaterialDangerousTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialDangerousTwoTone;
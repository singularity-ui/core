import React from 'react';
import styled from 'styled-components';

const MaterialUnpublishedTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.59,10.76l2.65-2.65l1.41,1.41l-2.65,2.65l3.88,3.88C19.59,14.86,20,13.48,20,12c0-4.41-3.59-8-8-8 c-1.48,0-2.86,0.41-4.06,1.12L13.59,10.76z M17.66,9.53l-1.41-1.41l-2.65,2.65l1.41,1.41L17.66,9.53z M16.06,18.88l-3.88-3.88 l-1.59,1.59l-4.24-4.24l1.41-1.41l2.83,2.83l0.18-0.18L5.12,7.94C4.41,9.14,4,10.52,4,12c0,4.41,3.59,8,8,8 C13.48,20,14.86,19.59,16.06,18.88z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.94,5.12L6.49,3.66C8.07,2.61,9.96,2,12,2c5.52,0,10,4.48,10,10c0,2.04-0.61,3.93-1.66,5.51l-1.46-1.46 C19.59,14.86,20,13.48,20,12c0-4.41-3.59-8-8-8C10.52,4,9.14,4.41,7.94,5.12z M17.66,9.53l-1.41-1.41l-2.65,2.65l1.41,1.41 L17.66,9.53z M19.78,22.61l-2.27-2.27C15.93,21.39,14.04,22,12,22C6.48,22,2,17.52,2,12c0-2.04,0.61-3.93,1.66-5.51L1.39,4.22 l1.41-1.41l18.38,18.38L19.78,22.61z M16.06,18.88l-3.88-3.88l-1.59,1.59l-4.24-4.24l1.41-1.41l2.83,2.83l0.18-0.18L5.12,7.94 C4.41,9.14,4,10.52,4,12c0,4.41,3.59,8,8,8C13.48,20,14.86,19.59,16.06,18.88z"
}));

const MaterialUnpublishedTwoTone = (styled.default || styled)(MaterialUnpublishedTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialUnpublishedTwoTone;
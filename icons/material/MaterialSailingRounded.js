import React from 'react';
import styled from 'styled-components';

const MaterialSailingRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M11,13V3.59c0-0.49-0.63-0.69-0.91-0.29l-6.54,9.41c-0.23,0.33,0.01,0.79,0.41,0.79h6.54C10.78,13.5,11,13.28,11,13z M20.99,12.98C20.72,7.07,15.9,2.32,13.4,1.23c-0.37-0.16-0.77,0.2-0.67,0.59c0.3,1.13,0.76,3.28,0.76,5.68 c0,2.44-0.49,4.39-0.78,5.35c-0.1,0.32,0.14,0.65,0.48,0.65h7.28C20.76,13.5,21,13.26,20.99,12.98z M20.62,15H3.38 c-0.73,0-1.22,0.76-0.92,1.42c0.43,0.92,1.07,1.71,1.86,2.31c0.38-0.16,0.74-0.38,1.06-0.63c0.35-0.29,0.87-0.29,1.23,0 C7.28,18.63,8.1,19,9,19c0.9,0,1.72-0.37,2.39-0.91c0.35-0.28,0.87-0.28,1.22,0C13.28,18.63,14.1,19,15,19 c0.9,0,1.72-0.37,2.39-0.91c0.35-0.29,0.87-0.28,1.23,0c0.32,0.26,0.67,0.48,1.06,0.63c0.79-0.6,1.43-1.39,1.86-2.31 C21.84,15.76,21.35,15,20.62,15z M22,22c0-0.55-0.45-1-1-1h0c-0.87,0-1.73-0.24-2.53-0.7c-0.29-0.16-0.65-0.17-0.94,0 c-1.59,0.9-3.47,0.9-5.06,0c-0.29-0.16-0.65-0.16-0.94,0c-1.59,0.9-3.47,0.9-5.06,0c-0.29-0.16-0.65-0.16-0.94,0 C4.73,20.76,3.87,21,3,21h0c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h0c1.15,0,2.3-0.31,3.33-0.94c1.66,1.11,3.78,1.01,5.58,0.14 c1.91,1.05,4.17,1.07,6.09,0.05h0c0.95,0.5,1.97,0.75,3,0.75h0C21.55,23,22,22.55,22,22z"
}));

const MaterialSailingRounded = (styled.default || styled)(MaterialSailingRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSailingRounded;
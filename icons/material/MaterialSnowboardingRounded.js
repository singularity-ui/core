import React from 'react';
import styled from 'styled-components';

const MaterialSnowboardingRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M14,3c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S14,4.1,14,3z M6.35,9.53c0.47,0.29,1.09,0.15,1.38-0.32L9.1,7h2.35 l-2.51,3.99c-0.28,0.45-0.37,1-0.25,1.52L9.5,16L6,18.35l-0.47-0.1c-0.96-0.2-1.71-0.85-2.1-1.67c-0.1-0.21-0.28-0.37-0.51-0.42 c-0.43-0.09-0.82,0.2-0.9,0.58C1.98,16.88,2,17.05,2.07,17.2c0.58,1.24,1.71,2.2,3.15,2.51l12.63,2.69c1.44,0.31,2.86-0.11,3.9-1.01 c0.13-0.11,0.21-0.26,0.24-0.41c0.08-0.38-0.16-0.8-0.59-0.89c-0.23-0.05-0.46,0.02-0.64,0.17c-0.69,0.6-1.64,0.88-2.6,0.67 L17,20.69l-0.88-5.43c-0.08-0.49-0.34-0.93-0.72-1.24l-2.72-2.19l1.8-2.89c0.96,1.53,2.54,2.64,4.39,2.96c0.6,0.11,1.13-0.39,1.13-1 c0-0.48-0.35-0.89-0.83-0.98c-1.49-0.28-2.72-1.29-3.3-2.64l-0.52-1.21C15.16,5.64,14.61,5,13.7,5H9.11c-0.69,0-1.33,0.36-1.7,0.94 L6.03,8.15C5.74,8.62,5.88,9.24,6.35,9.53z M8.73,18.93l2.25-1.51c0.47-0.32,0.73-0.88,0.65-1.44l-0.32-2.4l2.84,2.02l0.75,4.64 L8.73,18.93z"
}));

const MaterialSnowboardingRounded = (styled.default || styled)(MaterialSnowboardingRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSnowboardingRounded;
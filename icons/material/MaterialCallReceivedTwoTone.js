import React from 'react';
import styled from 'styled-components';

const MaterialCallReceivedTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"
}));

const MaterialCallReceivedTwoTone = (styled.default || styled)(MaterialCallReceivedTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCallReceivedTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialEqualizerTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z"
}));

const MaterialEqualizerTwoTone = (styled.default || styled)(MaterialEqualizerTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialEqualizerTwoTone;
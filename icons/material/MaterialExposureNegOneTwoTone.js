import React from 'react';
import styled from 'styled-components';

const MaterialExposureNegOneTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z"
}));

const MaterialExposureNegOneTwoTone = (styled.default || styled)(MaterialExposureNegOneTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialExposureNegOneTwoTone;
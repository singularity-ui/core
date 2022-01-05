import React from 'react';
import styled from 'styled-components';

const MaterialCompassCalibrationSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "17",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08z"
}));

const MaterialCompassCalibration = (styled.default || styled)(MaterialCompassCalibrationSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCompassCalibration;
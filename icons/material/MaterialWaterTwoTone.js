import React from 'react';
import styled from 'styled-components';

const MaterialWaterTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.98,14H22H21.98z M5.35,13c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1 c1.19,0,1.4,0.98,3.31,1v-2c-1.19,0-1.42-1-3.33-1c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1c-1.95,0-2.09,1-3.33,1 c-1.19,0-1.42-1-3.33-1C3.38,11,3.24,12,2,12v2C3.9,14,4.17,13,5.35,13z M18.67,15c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1 c-1.95,0-2.1,1-3.34,1c-1.24,0-1.38-1-3.33-1c-1.95,0-2.1,1-3.34,1v2c1.95,0,2.11-1,3.34-1c1.24,0,1.38,1,3.33,1 c1.95,0,2.1-1,3.34-1c1.19,0,1.42,1,3.33,1c1.94,0,2.09-1,3.33-1c1.19,0,1.42,1,3.33,1v-2C20.76,16,20.62,15,18.67,15z M5.35,9 c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1c1.19,0,1.4,0.98,3.31,1V8 c-1.19,0-1.42-1-3.33-1c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1C10.04,7,9.9,8,8.66,8C7.47,8,7.24,7,5.33,7 C3.38,7,3.24,8,2,8v2C3.9,10,4.17,9,5.35,9z"
}))));

const MaterialWaterTwoTone = (styled.default || styled)(MaterialWaterTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialWaterTwoTone;
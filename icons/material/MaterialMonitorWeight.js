import React from 'react';
import styled from 'styled-components';

const MaterialMonitorWeightSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M12,12c-1.66,0-3-1.34-3-3 s1.34-3,3-3s3,1.34,3,3S13.66,12,12,12z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  width: "1",
  x: "10",
  y: "8.5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  width: "1",
  x: "11.5",
  y: "8.5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  width: "1",
  x: "13",
  y: "8.5"
}))));

const MaterialMonitorWeight = (styled.default || styled)(MaterialMonitorWeightSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialMonitorWeight;
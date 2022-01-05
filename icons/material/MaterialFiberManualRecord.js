import React from 'react';
import styled from 'styled-components';

const MaterialFiberManualRecordSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M24 24H0V0h24v24z",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}));

const MaterialFiberManualRecord = (styled.default || styled)(MaterialFiberManualRecordSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFiberManualRecord;
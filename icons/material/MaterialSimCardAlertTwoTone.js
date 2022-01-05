import React from 'react';
import styled from 'styled-components';

const MaterialSimCardAlertTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6,8.83V20h12V4h-7.17L6,8.83z M11,8h2v5h-2V8z M11,15h2v2h-2V15z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,2h-8L4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,20H6V8.83L10.83,4H18V20z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "11",
  y: "15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  width: "2",
  x: "11",
  y: "8"
}))))));

const MaterialSimCardAlertTwoTone = (styled.default || styled)(MaterialSimCardAlertTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSimCardAlertTwoTone;
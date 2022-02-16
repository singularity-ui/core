import React from 'react';
import styled from 'styled-components';

const MaterialMapsHomeWorkTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17,11h2v2h-2v2h2v2h-2v2h4V5h-9v1.4l5,3.57V11z M17,7h2v2h-2V7z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "10,3 10,4.97 10.96,5.66 12,6.4 12,5 21,5 21,19 17,19 17,21 23,21 23,3"
}), /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "3,12 3,19 5,19 5,14 11,14 11,19 13,19 13,12 8,8.5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "17",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "17",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "17",
  y: "15"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1,11v10h6v-5h2v5h6V11L8,6L1,11z M13,19h-2v-5H5v5H3v-7l5-3.5l5,3.5V19z"
}))));

const MaterialMapsHomeWorkTwoTone = (styled.default || styled)(MaterialMapsHomeWorkTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialMapsHomeWorkTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialGppGoodTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6,6.31v4.78c0,4,2.55,7.7,6,8.83c3.45-1.13,6-4.82,6-8.83V6.31l-6-2.12 L6,6.31z M16.6,9.88l-5.66,5.66L7.4,12l1.41-1.41l2.12,2.12l4.24-4.24L16.6,9.88z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M18,11.09c0,4-2.55,7.7-6,8.83 c-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12l6,2.12V11.09z M8.82,10.59L7.4,12l3.54,3.54l5.66-5.66l-1.41-1.41l-4.24,4.24L8.82,10.59z"
}))));

const MaterialGppGoodTwoTone = (styled.default || styled)(MaterialGppGoodTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialGppGoodTwoTone;
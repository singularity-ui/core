import React from 'react';
import styled from 'styled-components';

const MaterialRepeatOneTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 15V9h-1l-2 1v1h1.5v4zm6-2h-2v4H7v-3l-4 4 4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z"
}));

const MaterialRepeatOneTwoTone = (styled.default || styled)(MaterialRepeatOneTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialRepeatOneTwoTone;
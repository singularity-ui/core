import React from 'react';
import styled from 'styled-components';

const MaterialBookmarkAddTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,17.97l0-7.07c-2.28-0.46-4-2.48-4-4.9c0-0.34,0.03-0.68,0.1-1L7,5v12.97l5-2.14L17,17.97z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z M17,17.97l-5-2.14l-5,2.14V5l6.1,0c0.15-0.74,0.46-1.42,0.9-2L7,3C5.9,3,5,3.9,5,5v16 l7-3l7,3l0-10.1c-0.32,0.07-0.66,0.1-1,0.1c-0.34,0-0.68-0.03-1-0.1L17,17.97z"
}));

const MaterialBookmarkAddTwoTone = (styled.default || styled)(MaterialBookmarkAddTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBookmarkAddTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialSettingsOverscanRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12.01,7L10,9h4L12.01,7z M17,10v4l2-1.99L17,10z M7,10l-2,2.01L7,14V10z M14,15h-4l2.01,2L14,15z M20,4H4C2.9,4,2,4.9,2,6 v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18.01H4V5.99h16V18.01z"
})));

const MaterialSettingsOverscanRounded = (styled.default || styled)(MaterialSettingsOverscanRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSettingsOverscanRounded;
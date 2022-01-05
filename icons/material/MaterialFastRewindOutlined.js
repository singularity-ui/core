import React from 'react';
import styled from 'styled-components';

const MaterialFastRewindOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 9.86v4.28L14.97 12 18 9.86m-9 0v4.28L5.97 12 9 9.86M20 6l-8.5 6 8.5 6V6zm-9 0l-8.5 6 8.5 6V6z"
}));

const MaterialFastRewindOutlined = (styled.default || styled)(MaterialFastRewindOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFastRewindOutlined;
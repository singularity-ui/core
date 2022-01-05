import React from 'react';
import styled from 'styled-components';

const MaterialTextRotationNoneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.75 3h-1.5L6.5 14h2.1l.9-2.2h5l.9 2.2h2.1L12.75 3zm-2.62 7L12 4.98 13.87 10h-3.74zm10.37 8l-3-3v2H5v2h12.5v2l3-3z"
}));

const MaterialTextRotationNone = (styled.default || styled)(MaterialTextRotationNoneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTextRotationNone;
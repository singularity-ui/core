import React from 'react';
import styled from 'styled-components';

const MaterialSignalCellularAltOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z"
}));

const MaterialSignalCellularAltOutlined = (styled.default || styled)(MaterialSignalCellularAltOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSignalCellularAltOutlined;
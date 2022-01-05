import React from 'react';
import styled from 'styled-components';

const MaterialChangeHistorySvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"
}));

const MaterialChangeHistory = (styled.default || styled)(MaterialChangeHistorySvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialChangeHistory;
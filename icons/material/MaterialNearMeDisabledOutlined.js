import React from 'react';
import styled from 'styled-components';

const MaterialNearMeDisabledOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,6.34L21,3l-3.34,9l-1.56-1.56l1.5-4.05l-4.05,1.5L12,6.34z M21.19,21.19l-5.07-5.07L14.31,21H12.9l-2.83-7.07L3,11.1 V9.69l4.88-1.81L2.81,2.81l1.41-1.41l18.38,18.38L21.19,21.19z M14.57,14.57L9.43,9.43l-2.71,1.01l4.89,1.95l1.95,4.89L14.57,14.57z"
}));

const MaterialNearMeDisabledOutlined = (styled.default || styled)(MaterialNearMeDisabledOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNearMeDisabledOutlined;
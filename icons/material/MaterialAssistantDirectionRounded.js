import React from 'react';
import styled from 'styled-components';

const MaterialAssistantDirectionRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M13.5,10H9c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h3.5v1.29c0,0.45,0.54,0.67,0.85,0.35 l2.29-2.29c0.2-0.2,0.2-0.51,0-0.71l-2.29-2.29c-0.31-0.31-0.85-0.09-0.85,0.35V10z M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11 s11-4.9,11-11S18.1,1,12,1z M19.73,12.58l-7.19,7.22c-0.35,0.27-0.79,0.27-1.15,0L4.2,12.58c-0.27-0.36-0.27-0.8,0-1.16l7.19-7.22 c0.35-0.27,0.79-0.27,1.15,0l7.19,7.22C20.09,11.69,20.09,12.22,19.73,12.58z"
}))));

const MaterialAssistantDirectionRounded = (styled.default || styled)(MaterialAssistantDirectionRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAssistantDirectionRounded;
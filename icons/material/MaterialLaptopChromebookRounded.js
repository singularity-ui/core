import React from 'react';
import styled from 'styled-components';

const MaterialLaptopChromebookRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M23 18h-1V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1zm-9.5 0h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5zm6.5-3H4V6c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v9z"
}));

const MaterialLaptopChromebookRounded = (styled.default || styled)(MaterialLaptopChromebookRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialLaptopChromebookRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialPhotoSizeSelectSmallTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 19h2v2h-2zm-4 0h2v2h-2zM1 19c0 1.1.9 2 2 2h8v-6H1v4zM9 3h2v2H9zM5 3h2v2H5zm12 0h2v2h-2zM1 11h2v2H1zm0-4h2v2H1zm2-4C2 3 1 4 1 5h2V3zm10 0h2v2h-2zm8 18c1 0 2-1 2-2h-2v2zm0-10h2v2h-2zm0-8v2h2c0-1-1-2-2-2zm0 12h2v2h-2zm0-8h2v2h-2z"
}));

const MaterialPhotoSizeSelectSmallTwoTone = (styled.default || styled)(MaterialPhotoSizeSelectSmallTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPhotoSizeSelectSmallTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialNoMeetingRoomSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M11 11h-1v2h2v-1l9.73 9.73L20.46 23 14 16.54V21H3v-2h2V7.54l-4-4 1.27-1.27L11 11zm3 .49L5.51 3H14v1h5v12.49l-2-2V6h-3v5.49z"
}));

const MaterialNoMeetingRoom = (styled.default || styled)(MaterialNoMeetingRoomSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNoMeetingRoom;
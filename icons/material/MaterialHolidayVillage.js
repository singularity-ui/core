import React from 'react';
import styled from 'styled-components';

const MaterialHolidayVillageSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M18,20V8.35L13.65,4h-2.83L16,9.18V20H18z M22,20V6.69L19.31,4h-2.83L20,7.52V20H22z M8,4l-6,6v10h5v-5h2v5h5V10L8,4z M9,13 H7v-2h2V13z"
}));

const MaterialHolidayVillage = (styled.default || styled)(MaterialHolidayVillageSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialHolidayVillage;
import React from 'react';
import styled from 'styled-components';

const MaterialTimerTenSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M-.01 7.72V9.4l3-1V18h2V6h-.25L-.01 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25s-.23-.19-.28-.3c-.05-.11-.08-.24-.08-.39 0-.14.03-.28.09-.41s.15-.25.27-.34c.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11s.35.17.48.29.22.26.29.42c.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09s-.39-.63-.69-.88c-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21s-.77.33-1.06.57c-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77s-.66.29-1.17.29c-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05s.39.65.7.93c.31.27.69.49 1.15.66s.98.25 1.58.25c.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27s-1.11.09-1.59.27c-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89s1.01.28 1.59.28c.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89s.6-.94.78-1.6c.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53s-.2.76-.36 1.02c-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02s-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52s.21-.74.38-1c.16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99s.13.92.13 1.52v2.51h-.01z"
}));

const MaterialTimerTenSharp = (styled.default || styled)(MaterialTimerTenSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTimerTenSharp;
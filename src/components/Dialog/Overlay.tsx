import { styled } from 'styled-components'

export const Overlay = styled.div<{
  $isAbsolute: boolean
}>`
  background-color: ${p => p.theme.color.body.light};
  bottom: 0;
  left: 0;
  opacity: 0.25;
  position: ${p => (p.$isAbsolute ? 'absolute' : 'fixed')};
  right: 0;
  top: 0;
  z-index: 1;
`

import { styled } from 'styled-components'

export const Window = styled.div<{
  $isAbsolute: boolean
}>`
  border-radius: ${p => p.theme.appearance.borderRadius.large};
  bottom: ${p => p.theme.padding.layout.giant};
  box-shadow: ${p => p.theme.shadow.large};
  max-width: 32rem;
  position: ${p => (p.$isAbsolute ? 'absolute' : 'fixed')};
  width: calc(100% - 2 * ${p => p.theme.padding.layout.large});
  z-index: 1;

  @media (min-width: ${p => p.theme.breakpoint.sm}) {
    bottom: auto;
  }
`

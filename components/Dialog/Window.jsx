import styled from 'styled-components'

const Window = styled.div`
  border-radius: ${p => p.theme.appearance.borderRadius.large};
  bottom: ${p => p.theme.padding.layout.giant};
  box-shadow: ${p => p.theme.shadow.large};
  max-width: 32rem;
  position: fixed;
  width: calc(100% - 2 * ${p => p.theme.padding.layout.large});

  @media (min-width: ${p => p.theme.breakpoint.sm}) {
    bottom: auto;
  }
`

export default Window

import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${p => p.theme.color.card.background};
  border-radius: ${p => p.theme.appearance.borderRadius.large};
  box-shadow: ${p => p.theme.shadow.small};
  padding: ${p => p.theme.padding.layout.medium};
`

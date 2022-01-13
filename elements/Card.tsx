import styled from 'styled-components'

import type { DefaultTheme, StyledComponent } from 'styled-components'

export type CardProps = StyledComponent<'div', DefaultTheme, {}, never>
export const Card: CardProps = styled.div`
  background-color: ${p => p.theme.color.card.background};
  border-radius: ${p => p.theme.appearance.borderRadius.large};
  box-shadow: ${p => p.theme.shadow.small};
  padding: ${p => p.theme.padding.layout.medium};
`

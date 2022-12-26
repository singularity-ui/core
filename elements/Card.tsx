import { forwardRef } from 'react'
import styled from 'styled-components'

import type { ForwardedRef, HTMLAttributes } from 'react'

const StyledCard = styled.div`
  background-color: ${p => p.theme.color.card.background};
  border-radius: ${p => p.theme.appearance.borderRadius.large};
  box-shadow: ${p => p.theme.shadow.small};
  padding: ${p => p.theme.padding.layout.medium};
`

export type CardProps = HTMLAttributes<HTMLDivElement>
function CardWithRef({ children, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <StyledCard ref={ref} className="Card" {...props}>
      {children}
    </StyledCard>
  )
}

export const Card = forwardRef(CardWithRef)

Card.displayName = 'Card'

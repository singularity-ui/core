import React from 'react'
import styled from 'styled-components'

import type { ForwardRefRenderFunction, HTMLAttributes } from 'react'

const StyledCard = styled.div`
  background-color: ${p => p.theme.color.card.background};
  border-radius: ${p => p.theme.appearance.borderRadius.large};
  box-shadow: ${p => p.theme.shadow.small};
  padding: ${p => p.theme.padding.layout.medium};
`

export type CardProps = HTMLAttributes<HTMLDivElement>
const CardWithRef: ForwardRefRenderFunction<HTMLDivElement, CardProps> = ({ children, ...props }: CardProps, ref) => (
  <StyledCard ref={ref} className="Card" {...props}>
    {children}
  </StyledCard>
)

export const Card = React.forwardRef(CardWithRef)

Card.displayName = 'Card'

Card.propTypes = {}

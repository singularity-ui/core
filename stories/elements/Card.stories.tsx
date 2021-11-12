import React from 'react'
import styled from 'styled-components'

import { Card as SuiCard } from '../..'

const StyledCard = styled(SuiCard)`
  height: 20rem;
  width: 15rem;
`

export default {
  title: 'Elements/Card',
  component: SuiCard,
}

export const Card = props => <StyledCard {...props}>This is just a card.</StyledCard>

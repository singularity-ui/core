import React from 'react'
import styled from 'styled-components'

import SingularityCard from '../../elements/Card'

const StyledCard = styled(SingularityCard)`
  height: 20rem;
  width: 15rem;
`

export default {
  title: 'Elements/Card',
  component: SingularityCard,
}

export const Card = props => <StyledCard {...props}>This is just a card.</StyledCard>

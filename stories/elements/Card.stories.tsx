import React from 'react'
import styled from 'styled-components'

import { Card } from '../..'

import type { CardProps } from '../..'

const Box = styled.div`
  max-width: 30rem;
`

const args: CardProps = {}

export default {
  title: 'Elements/Card',
  component: Card,

  argTypes: {},

  ...args,
}

export const _Card = (props: CardProps) => (
  <Box>
    <Card {...props}>This is just a card.</Card>
  </Box>
)

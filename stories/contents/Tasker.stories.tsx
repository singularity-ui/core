import DumDum from 'dumdum'
import React from 'react'
import styled from 'styled-components'

import { Tasker as SuiTasker } from '../..'

const dumdum = DumDum.create()

const makeTasks = () =>
  new Array(3).fill(null).map(() => () => <SuiTasker.Task>{dumdum.text([12, 100])}</SuiTasker.Task>)

const StyledTasker = styled(SuiTasker)`
  width: 100%;
`

export default {
  title: 'Contents/Tasker',
  component: SuiTasker,

  argTypes: {},

  args: {
    data: [
      { label: 'Upcoming', tasks: makeTasks() },
      { label: 'In Progress', tasks: makeTasks() },
      { label: 'Completed', tasks: makeTasks() },
    ],
  },
}

export const Tasker = props => <StyledTasker {...props} />

import Jabber from 'jabber'
import React from 'react'
import styled from 'styled-components'

import SingularityTasker from '../../contents/Tasker'

const jabber = new Jabber()

const makeTasks = () =>
  new Array(3).fill(null).map(() => () => <SingularityTasker.Task>{jabber.createParagraph}</SingularityTasker.Task>)

const StyledTasker = styled(SingularityTasker)`
  width: 100%;
`

export default {
  title: 'Contents/Tasker',
  component: SingularityTasker,

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

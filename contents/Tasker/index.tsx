import BetterPropTypes from 'better-prop-types'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { Lane } from './Lane'
import { Task } from './Task'

const Box = styled.div`
  display: flex;
`

const LaneBox = styled.div<{
  width: number
}>`
  max-width: ${p => p.width}%;
  min-width: ${p => p.width}%;
  padding-left: ${p => p.theme.padding.layout.medium};
  padding-right: ${p => p.theme.padding.layout.medium};
`

export const Tasker = Object.assign<
  FunctionComponent<{
    data: Array<{
      label: string
      tasks: FunctionComponent[]
    }>
  }>,
  any
>(
  ({ data, ...props }) => {
    const laneCount = data.length
    const laneWidth = Math.round((10000 * 100) / laneCount) / 10000

    return (
      <Box {...props}>
        {data.map((dataLane, laneIndex) => (
          <LaneBox key={String(laneIndex)} width={laneWidth}>
            <Lane label={dataLane.label} tasks={dataLane.tasks} />
          </LaneBox>
        ))}
      </Box>
    )
  },
  {
    Task,
  },
)

Tasker.propTypes = {
  data: BetterPropTypes.arrayOf(BetterPropTypes.shape(Lane.propTypes)).isRequired,
}

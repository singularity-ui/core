import styled from 'styled-components'

import { Lane } from './Lane'
import { Task } from './Task'

const Box = styled.div`
  display: flex;
  min-height: 0;

  > div:first-child {
    padding-left: 0;
  }
  > div:last-child {
    padding-right: 0;
  }
`

const LaneBox = styled.div<{
  width: number
}>`
  max-width: ${p => p.width}%;
  min-width: ${p => p.width}%;
  padding-left: ${p => p.theme.padding.layout.medium};
  padding-right: ${p => p.theme.padding.layout.medium};
`

export function BareTasker({
  data,
  ...props
}: {
  data: Array<{
    label: string
    tasks: any[]
  }>
}) {
  const laneCount = data.length
  const laneWidth = Math.round((10000 * 100) / laneCount) / 10000

  return (
    <Box {...props}>
      {data.map((dataLane, laneIndex) => (
        // TODO Stop using index as key in lanes list
        // eslint-disable-next-line react/no-array-index-key
        <LaneBox key={String(laneIndex)} width={laneWidth}>
          <Lane label={dataLane.label} tasks={dataLane.tasks} />
        </LaneBox>
      ))}
    </Box>
  )
}

BareTasker.displayName = 'Tasker'

export const Tasker = Object.assign(BareTasker, {
  Task,
})

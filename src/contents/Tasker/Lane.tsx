import { styled } from 'styled-components'

const Box = styled.div`
  background-color: white;
  border-radius: ${p => p.theme.appearance.borderRadius.medium};
  box-shadow: ${p => p.theme.shadow.small};
  display: flex;
  flex-direction: column;
  max-height: 100%;
  min-height: 0;
  padding: ${p => p.theme.padding.layout.small} ${p => p.theme.padding.layout.medium};
`

const Header = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
`
const Label = styled.h3`
  font-weight: 500;
  width: 100%;
`
const Counter = styled.span`
  background-color: ${p => p.theme.color.primary.default};
  color: white;
  font-size: 80%;
  font-weight: 500;
  line-height: 1.5;
  margin-top: ${p => p.theme.padding.layout.tiny};
  padding: 0 ${p => p.theme.padding.layout.small};
`

const TasksBox = styled.div`
  overflow-y: auto;
`

type LaneProps = {
  label: string
  tasks: any[]
}
export function Lane({ label, tasks }: LaneProps) {
  return (
    <Box className="Lane">
      <Header className="Header">
        <Label className="Label">{label}</Label>
        <Counter className="Counter">{tasks.length}</Counter>
      </Header>
      <TasksBox>
        {tasks.map((Task, index) => (
          // TODO Stop using index as key in lane tasks list
          // eslint-disable-next-line react/no-array-index-key
          <Task key={String(index)} className="Task" />
        ))}
      </TasksBox>
    </Box>
  )
}

import { styled } from 'styled-components'

export const Task = styled.div`
  background-color: #e2e8ee;
  border: solid 1px #ced4da;
  border-radius: ${p => p.theme.appearance.borderRadius.medium};
  cursor: grab;
  margin: ${p => p.theme.padding.layout.medium} 0 ${p => p.theme.padding.layout.small};
  padding: ${p => p.theme.padding.layout.medium};
`

import styled from 'styled-components'

const Overlay = styled.div`
  background-color: ${p => p.theme.color.body.light};
  bottom: 0;
  left: 0;
  opacity: 0.25;
  position: fixed;
  right: 0;
  top: 0;
`

export default Overlay

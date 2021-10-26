import styled from 'styled-components'

const Body = styled.div`
  background-color: ${p => p.theme.color.body.white};
  border-top-left-radius: ${p => p.theme.appearance.borderRadius.large};
  border-top-right-radius: ${p => p.theme.appearance.borderRadius.large};
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.padding.layout.large};

  > p {
    padding-top: ${p => p.theme.padding.layout.small};
  }
`

export default Body

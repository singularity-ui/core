import styled from 'styled-components'

const Body = styled.div`
  background-color: ${p => p.theme.color.body.white};
  border-top-left-radius: ${p => p.theme.appearance.borderRadius.large};
  border-top-right-radius: ${p => p.theme.appearance.borderRadius.large};
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.padding.layout.large} ${p => p.theme.padding.layout.medium}
    ${p => p.theme.padding.layout.medium};
  text-align: center;

  > p {
    color: ${p => p.theme.color.body.light};
    padding-top: ${p => p.theme.padding.layout.tiny};
  }

  @media (min-width: ${p => p.theme.breakpoint.sm}) {
    padding: ${p => p.theme.padding.layout.large} ${p => p.theme.padding.layout.large}
      ${p => p.theme.padding.layout.medium};
    text-align: left;
  }
`

export default Body

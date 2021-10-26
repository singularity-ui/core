import styled from 'styled-components'

const Action = styled.div`
  background-color: ${p => p.theme.color.body.background};
  border-bottom-left-radius: ${p => p.theme.appearance.borderRadius.large};
  border-bottom-right-radius: ${p => p.theme.appearance.borderRadius.large};
  display: flex;
  flex-direction: column-reverse;
  padding: ${p => p.theme.padding.layout.medium} ${p => p.theme.padding.layout.medium} 0;

  > button {
    margin-bottom: ${p => p.theme.padding.layout.medium};
  }

  @media (min-width: ${p => p.theme.breakpoint.sm}) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    padding: ${p => p.theme.padding.layout.medium} 0 ${p => p.theme.padding.layout.medium}
      ${p => p.theme.padding.layout.medium};

    > button {
      margin-bottom: 0;
      margin-right: ${p => p.theme.padding.layout.medium};
    }
  }
`

export default Action

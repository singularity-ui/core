import React, { FunctionComponent, HTMLAttributes } from 'react'
import styled, { DefaultTheme, StyledComponent } from 'styled-components'

import { Action } from './Action'
import { Body } from './Body'
import { Overlay } from './Overlay'
import { Title } from './Title'
import { Window } from './Window'

const StyledDialog = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
`

interface DialogComponent extends FunctionComponent<HTMLAttributes<any>> {
  Action: StyledComponent<'div', DefaultTheme>
  Body: StyledComponent<'div', DefaultTheme>
  Title: StyledComponent<'h4', DefaultTheme>
}
export const Dialog: DialogComponent = Object.assign(
  ({ children, ...props }) => (
    <StyledDialog {...props}>
      <Overlay />

      <Window>{children}</Window>
    </StyledDialog>
  ),
  {
    Action,
    Body,
    Title,
  },
)

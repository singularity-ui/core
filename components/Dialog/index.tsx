import React from 'react'
import styled from 'styled-components'

import { Action } from './Action'
import { Body } from './Body'
import { Overlay } from './Overlay'
import { Title } from './Title'
import { Window } from './Window'

import type { FunctionComponent, HTMLAttributes } from 'react'

export const StyledDialog = styled.div<{
  isAbsolute: boolean
}>`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  overflow-y: auto;
  position: ${p => (p.isAbsolute ? 'absolute' : 'fixed')};
  right: 0;
  top: 0;
  z-index: 1;
`

export type DialogProps = HTMLAttributes<HTMLDivElement> & {
  isAbsolute?: boolean
}
const BareDialog: FunctionComponent<DialogProps> = ({ children, isAbsolute = false, ...props }) => (
  <StyledDialog isAbsolute={isAbsolute} {...props}>
    <Overlay isAbsolute={isAbsolute} />

    <Window isAbsolute={isAbsolute}>{children}</Window>
  </StyledDialog>
)

BareDialog.displayName = 'Dialog'

export const Dialog = Object.assign(BareDialog, {
  Action,
  Body,
  Title,
})

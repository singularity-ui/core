import BetterPropTypes from 'better-prop-types'
import React from 'react'

import { StyledDialog } from '../Dialog'
import { Action } from '../Dialog/Action'
import { Body } from '../Dialog/Body'
import { Overlay } from '../Dialog/Overlay'
import { Title } from '../Dialog/Title'
import { Window } from '../Dialog/Window'

import type { FunctionComponent, HTMLAttributes, MouseEventHandler } from 'react'

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isAbsolute?: boolean
  onCancel: MouseEventHandler<HTMLDivElement>
}
const BareModal: FunctionComponent<ModalProps> = ({ children, isAbsolute = false, onCancel, ...props }) => (
  <StyledDialog isAbsolute={isAbsolute} {...props}>
    <Overlay isAbsolute={isAbsolute} onClick={onCancel} />

    <Window isAbsolute={isAbsolute}>{children}</Window>
  </StyledDialog>
)

BareModal.displayName = 'Modal'

BareModal.propTypes = {
  onCancel: BetterPropTypes.func.isRequired,
}

export const Modal = Object.assign(BareModal, {
  Action,
  Body,
  Title,
})

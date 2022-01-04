import BetterPropTypes from 'better-prop-types'
import React from 'react'

import { StyledDialog } from '../Dialog'
import { Action } from '../Dialog/Action'
import { Body } from '../Dialog/Body'
import { Overlay } from '../Dialog/Overlay'
import { Title } from '../Dialog/Title'
import { Window } from '../Dialog/Window'

import type { FunctionComponent, HTMLAttributes, MouseEventHandler } from 'react'

type BareModalProps = HTMLAttributes<HTMLDivElement> & {
  onCancel: MouseEventHandler<HTMLDivElement>
}
const BareModal: FunctionComponent<BareModalProps> = ({ children, onCancel, ...props }) => (
  <StyledDialog {...props}>
    <Overlay onClick={onCancel} />

    <Window>{children}</Window>
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

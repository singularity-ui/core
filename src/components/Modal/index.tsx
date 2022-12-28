import { StyledDialog } from '../Dialog'
import { Action } from '../Dialog/Action'
import { Body } from '../Dialog/Body'
import { Overlay } from '../Dialog/Overlay'
import { Title } from '../Dialog/Title'
import { Window } from '../Dialog/Window'

import type { HTMLAttributes, MouseEventHandler } from 'react'

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isAbsolute?: boolean
  onCancel: MouseEventHandler<HTMLDivElement>
}
export function BareModal({ children, isAbsolute = false, onCancel, ...props }: ModalProps) {
  return (
    <StyledDialog isAbsolute={isAbsolute} {...props}>
      <Overlay isAbsolute={isAbsolute} onClick={onCancel} />

      <Window isAbsolute={isAbsolute}>{children}</Window>
    </StyledDialog>
  )
}

BareModal.displayName = 'Modal'

export const Modal = Object.assign(BareModal, {
  Action,
  Body,
  Title,
})

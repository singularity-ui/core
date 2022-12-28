import React from 'react'

import { Dialog as SuiDialog, Button, Card, Accent } from '../../src'

export default {
  title: 'Components/Dialog',
  component: SuiDialog,

  argTypes: {},

  args: {},
}

export const Dialog = () => {
  const [isOpen, setIsOpen] = React.useState(true)

  if (!isOpen) {
    return (
      <Card style={{ maxWidth: '32rem' }}>
        <p>Unlike a Modal, a Dialog forces the user to pick an action.</p>
        <p>
          It{' '}
          <a
            href="https://www.quora.com/Whats-the-difference-between-a-modal-and-dialog"
            rel="noreferrer"
            target="_blank"
          >
            can’t be cancelled
          </a>{' '}
          by clicking outside.
        </p>

        <Button accent={Accent.PRIMARY} onClick={() => setIsOpen(true)} style={{ marginTop: '1rem' }}>
          Open dialog
        </Button>
      </Card>
    )
  }

  return (
    <SuiDialog>
      <SuiDialog.Body>
        <SuiDialog.Title>Deletion Confirmation</SuiDialog.Title>
        <p>Are you sure you want to deactivate your account?</p>
        <p>All of your data will be permanently removed.</p>
      </SuiDialog.Body>

      <SuiDialog.Action>
        <Button accent={Accent.SECONDARY} onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button accent={Accent.DANGER}>Delete</Button>
      </SuiDialog.Action>
    </SuiDialog>
  )
}

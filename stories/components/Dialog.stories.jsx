import React from 'react'

import SingularityDialog from '../../components/Dialog'
import Button from '../../elements/Button'
import Card from '../../elements/Card'

export default {
  title: 'Components/Dialog',
  component: SingularityDialog,

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

        <Button accent="primary" onClick={() => setIsOpen(true)} style={{ marginTop: '1rem' }}>
          Open dialog
        </Button>
      </Card>
    )
  }

  return (
    <SingularityDialog>
      <SingularityDialog.Body>
        <SingularityDialog.Title>Deletion Confirmation</SingularityDialog.Title>
        <p>Are you sure you want to deactivate your account?</p>
        <p>All of your data will be permanently removed.</p>
      </SingularityDialog.Body>

      <SingularityDialog.Action>
        <Button accent="secondary" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button accent="danger">Delete</Button>
      </SingularityDialog.Action>
    </SingularityDialog>
  )
}

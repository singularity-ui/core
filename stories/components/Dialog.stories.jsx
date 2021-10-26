import React from 'react'

import SingularityDialog from '../../components/Dialog'
import Button from '../../elements/Button'

export default {
  title: 'Components/Dialog',
  component: SingularityDialog,

  argTypes: {},

  args: {},
}

export const Dialog = () => (
  <SingularityDialog>
    <SingularityDialog.Overlay />

    <SingularityDialog.Window>
      <SingularityDialog.Body>
        <SingularityDialog.Title>Deletion Confirmation</SingularityDialog.Title>
        <p>Are you sure you want to deactivate your account?</p>
        <p>All of your data will be permanently removed.</p>
      </SingularityDialog.Body>

      <SingularityDialog.Action>
        <Button accent="secondary">Cancel</Button>
        <Button accent="danger">Delete</Button>
      </SingularityDialog.Action>
    </SingularityDialog.Window>
  </SingularityDialog>
)

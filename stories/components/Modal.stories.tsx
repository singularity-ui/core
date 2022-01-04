import React from 'react'

import { Modal, Button, Card, TextInput, Field } from '../..'

export default {
  title: 'Components/Modal',
  component: Modal,

  argTypes: {},

  args: {},
}

export const _Modal = () => {
  const [isOpen, setIsOpen] = React.useState(true)

  if (!isOpen) {
    return (
      <Card style={{ maxWidth: '32rem' }}>
        <p>A Modal can be closed by clicking outside.</p>

        <Button accent="primary" onClick={() => setIsOpen(true)} style={{ marginTop: '1rem' }}>
          Open Modal
        </Button>
      </Card>
    )
  }

  return (
    <Modal onCancel={() => setIsOpen(false)}>
      <form
        onSubmit={event => {
          event.preventDefault()

          setIsOpen(false)
        }}
      >
        <Modal.Body>
          <Modal.Title>Connection</Modal.Title>

          <Field>
            <TextInput label="Email" type="email" />
          </Field>

          <Field>
            <TextInput label="Password" type="password" />
          </Field>
        </Modal.Body>

        <Modal.Action>
          <Button type="submit">Log In</Button>
        </Modal.Action>
      </form>
    </Modal>
  )
}

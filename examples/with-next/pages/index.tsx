import { Button, Dialog } from '@singularity/core'

export default function IndexPage() {
  return (
    <Dialog>
      <Dialog.Body>
        <Dialog.Title>Hi there!</Dialog.Title>

        <p>If you see this dialog, the build worked :).</p>
      </Dialog.Body>

      <Dialog.Action>
        <Button>Indeed</Button>
      </Dialog.Action>
    </Dialog>
  )
}

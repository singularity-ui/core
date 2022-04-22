import React from 'react'
import { Editor as SlateEditor, Element as SlateElement, Transforms } from 'slate'
import { useSlate } from 'slate-react'

import { SIZE } from '../../common/constants'
import { Modal } from '../../components/Modal'
import { Button as SuiButton } from '../../elements/Button'
import { TextInput } from '../TextInput'
import { Button } from './Button'
import { getBlockProps, isBlockActive, updateLink } from './helpers'

import type { FunctionComponent } from 'react'
import type { BaseEditor } from 'slate'
import type { ReactEditor } from 'slate-react'

const FORMAT = 'link'

export type LinkButtonProps = {
  Icon: any
}
export const LinkButton: FunctionComponent<LinkButtonProps> = ({ Icon }) => {
  const $editor = React.useRef<(BaseEditor & ReactEditor) | undefined>()
  const $input = React.useRef<HTMLInputElement>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const editor = useSlate()

  const closeModal = React.useCallback(() => {
    setIsModalOpen(false)
  }, [isModalOpen])

  const openModal = React.useCallback(() => {
    $editor.current = editor

    console.log(editor.selection)

    setIsModalOpen(true)
  }, [editor, isModalOpen])

  const update = React.useCallback(() => {
    if ($editor.current === undefined || $input.current === null) {
      return
    }

    updateLink($editor.current, $input.current.value)

    closeModal()
  }, [])

  return (
    <>
      <Button isActive={isBlockActive(editor, FORMAT)} onClick={openModal} type="button">
        <Icon />
      </Button>

      {isModalOpen && (
        <Modal isAbsolute onCancel={closeModal}>
          <Modal.Body>
            <TextInput ref={$input} defaultValue={getBlockProps(editor, FORMAT).link} size={SIZE.SMALL} />
          </Modal.Body>
          <Modal.Action>
            <SuiButton accent="secondary" onClick={closeModal} size={SIZE.SMALL}>
              Cancel
            </SuiButton>
            <SuiButton onClick={update} size={SIZE.SMALL}>
              {isBlockActive(editor, FORMAT) ? 'Update' : 'Insert'}
            </SuiButton>
          </Modal.Action>
        </Modal>
      )}
    </>
  )
}

import React from 'react'
import { useSlate } from 'slate-react'

import { Modal } from '../../components/Modal'
import { Accent, Size } from '../../constants'
import { Button as SuiButton } from '../../elements/Button'
import { MaterialLink } from '../../icons/material/MaterialLink'
import { MaterialLinkOff } from '../../icons/material/MaterialLinkOff'
import { TextInput } from '../TextInput'
import { Button } from './Button'
import { MarkdownEditorFormat } from './constants'
import {
  getBlockProps,
  isBlockActive,
  isSelectionCollapsed,
  unwrapInlineBlock,
  wrapOrUpdateInlineBlock,
} from './helpers'

export function LinkButtonGroup() {
  const $input = React.useRef<HTMLInputElement>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const editor = useSlate()

  const isActive = isBlockActive(editor, MarkdownEditorFormat.A)
  const isCollapsed = isSelectionCollapsed(editor)

  const closeModal = React.useCallback(() => {
    setIsModalOpen(false)
  }, [isModalOpen])

  const openModal = React.useCallback(() => {
    if (!isActive && isCollapsed) {
      return
    }

    setIsModalOpen(true)
  }, [isModalOpen])

  const addOrUpdate = () => {
    if ($input.current === null) {
      return
    }

    if ($input.current.value.trim().length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      remove()

      closeModal()

      return
    }

    wrapOrUpdateInlineBlock(editor, MarkdownEditorFormat.A, {
      link: $input.current.value,
    })

    closeModal()
  }

  const remove = () => {
    unwrapInlineBlock(editor, MarkdownEditorFormat.A)
  }

  return (
    <>
      <Button isActive={isActive} isDisabled={!isActive && isCollapsed} onClick={openModal} type="button">
        <MaterialLink />
      </Button>
      <Button isActive={isActive} isDisabled={!isActive} onClick={remove} type="button">
        <MaterialLinkOff />
      </Button>

      {isModalOpen && (
        <Modal isAbsolute onCancel={closeModal}>
          <Modal.Body>
            <TextInput
              ref={$input}
              defaultValue={getBlockProps(editor, MarkdownEditorFormat.A).link}
              size={Size.SMALL}
            />
          </Modal.Body>
          <Modal.Action>
            <SuiButton accent={Accent.SECONDARY} onClick={closeModal} size={Size.SMALL}>
              Cancel
            </SuiButton>
            <SuiButton onClick={addOrUpdate} size={Size.SMALL}>
              {isBlockActive(editor, MarkdownEditorFormat.A) ? 'Update' : 'Insert'}
            </SuiButton>
          </Modal.Action>
        </Modal>
      )}
    </>
  )
}

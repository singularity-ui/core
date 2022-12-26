import React from 'react'
import { useSlate } from 'slate-react'
import styled from 'styled-components'

import { MarkdownEditorFormat } from './constants'
import { getBlockFormat, toggleBlock } from './helpers'

const StyledSelect = styled.select`
  border: 0;
  color: ${p => p.theme.color.body.dark};
  font-family: inherit;
  font-size: ${p => p.theme.typography.size.small * 100}%;
  font-style: inherit;
  font-weight: inherit;
  opacity: 0.65;
  padding: 0 ${p => p.theme.padding.layout.small} 0 ${p => p.theme.padding.layout.small};
`

export type ToolbarBlockListProps = {
  formats: Array<MarkdownEditorFormat>
}
export function ToolbarBlockList({ formats }: ToolbarBlockListProps) {
  const $select = React.useRef<HTMLSelectElement>(null)
  const editor = useSlate()

  const currentBlockFormat = getBlockFormat(editor)

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    event.preventDefault()

    if ($select.current === null) {
      return
    }

    const targetedFormat = $select.current.value as MarkdownEditorFormat

    toggleBlock(editor, targetedFormat === MarkdownEditorFormat.P ? currentBlockFormat : targetedFormat)
  }

  return (
    <StyledSelect key={currentBlockFormat} ref={$select} defaultValue={currentBlockFormat} onChange={handleChange}>
      <option value={MarkdownEditorFormat.P}>Normal</option>
      {formats.includes(MarkdownEditorFormat.H1) && <option value={MarkdownEditorFormat.H1}>Heading 1</option>}
      {formats.includes(MarkdownEditorFormat.H2) && <option value={MarkdownEditorFormat.H2}>Heading 2</option>}
      {formats.includes(MarkdownEditorFormat.H3) && <option value={MarkdownEditorFormat.H3}>Heading 3</option>}
      {formats.includes(MarkdownEditorFormat.H4) && <option value={MarkdownEditorFormat.H4}>Heading 4</option>}
      {formats.includes(MarkdownEditorFormat.H5) && <option value={MarkdownEditorFormat.H5}>Heading 5</option>}
      {formats.includes(MarkdownEditorFormat.H6) && <option value={MarkdownEditorFormat.H6}>Heading 6</option>}
      {formats.includes(MarkdownEditorFormat.BLOCKQUOTE) && (
        <option value={MarkdownEditorFormat.BLOCKQUOTE}>Quote</option>
      )}
    </StyledSelect>
  )
}

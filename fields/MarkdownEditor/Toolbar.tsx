import React from 'react'
import styled from 'styled-components'

import { MaterialCode } from '../../icons/material/MaterialCode'
import { MaterialFormatBold } from '../../icons/material/MaterialFormatBold'
import { MaterialFormatItalic } from '../../icons/material/MaterialFormatItalic'
import { MaterialFormatListBulleted } from '../../icons/material/MaterialFormatListBulleted'
import { MaterialFormatListNumbered } from '../../icons/material/MaterialFormatListNumbered'
import { MaterialFormatQuote } from '../../icons/material/MaterialFormatQuote'
import { BlockButton } from './BlockButton'
import { MarkdownEditorFormat } from './constants'
import { LinkButton } from './LinkButton'
import { MarkButton } from './MarkButton'

import type { FunctionComponent } from 'react'

const DEFAULT_FORMATS = [
  MarkdownEditorFormat.BOLD,
  MarkdownEditorFormat.CODE,
  MarkdownEditorFormat.ITALIC,
  MarkdownEditorFormat.LINK,
  MarkdownEditorFormat.LIST,
  MarkdownEditorFormat.QUOTE,
]

const Box = styled.div`
  align-items: center;
  border-bottom: solid 2px ${p => p.theme.color.secondary.background};
  display: flex;
  padding: ${p => p.theme.padding.layout.medium};
`

export type ToolbarProps = {
  formats?: Array<MarkdownEditorFormat>
}
export const Toolbar: FunctionComponent<ToolbarProps> = ({ formats = DEFAULT_FORMATS }) => (
  <Box>
    {formats.includes(MarkdownEditorFormat.BOLD) && <MarkButton format="bold" Icon={MaterialFormatBold} />}
    {formats.includes(MarkdownEditorFormat.ITALIC) && <MarkButton format="italic" Icon={MaterialFormatItalic} />}
    {formats.includes(MarkdownEditorFormat.CODE) && <MarkButton format="code" Icon={MaterialCode} />}
    {formats.includes(MarkdownEditorFormat.QUOTE) && <BlockButton format="block_quote" Icon={MaterialFormatQuote} />}
    {formats.includes(MarkdownEditorFormat.LIST) && <BlockButton format="ul_list" Icon={MaterialFormatListBulleted} />}
    {formats.includes(MarkdownEditorFormat.LIST) && <BlockButton format="ol_list" Icon={MaterialFormatListNumbered} />}
    {formats.includes(MarkdownEditorFormat.LINK) && <LinkButton Icon={MaterialCode} />}
  </Box>
)

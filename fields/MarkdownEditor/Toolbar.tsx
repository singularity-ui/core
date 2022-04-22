import React from 'react'
import styled from 'styled-components'

import { MaterialCode } from '../../icons/material/MaterialCode'
import { MaterialFormatBold } from '../../icons/material/MaterialFormatBold'
import { MaterialFormatItalic } from '../../icons/material/MaterialFormatItalic'
import { MaterialFormatListBulleted } from '../../icons/material/MaterialFormatListBulleted'
import { MaterialFormatListNumbered } from '../../icons/material/MaterialFormatListNumbered'
import { BlockButton } from './BlockButton'
import { MarkdownEditorFormat } from './constants'
import { LinkButtonGroup } from './LinkButtonGroup'
import { MarkButton } from './MarkButton'
import { ToolbarBlockList } from './ToolbarBlockList'

import type { FunctionComponent } from 'react'

const DEFAULT_FORMATS = [
  MarkdownEditorFormat.STRONG,
  MarkdownEditorFormat.EM,

  MarkdownEditorFormat.H1,
  MarkdownEditorFormat.H2,
  MarkdownEditorFormat.H3,
  MarkdownEditorFormat.H4,
  MarkdownEditorFormat.H5,
  MarkdownEditorFormat.H6,
  MarkdownEditorFormat.BLOCKQUOTE,
  MarkdownEditorFormat.CODE,

  MarkdownEditorFormat.UL,
  MarkdownEditorFormat.OL,

  MarkdownEditorFormat.A,
]

const Box = styled.div`
  align-items: center;
  border-bottom: solid 2px ${p => p.theme.color.secondary.background};
  display: flex;
  padding: ${p => p.theme.padding.layout.medium} ${p => p.theme.padding.layout.medium}
    ${p => p.theme.padding.layout.medium} ${p => p.theme.padding.layout.small};
`

const Separator = styled.div`
  /* align-self: stretch; */
  /* border-left: solid 1px ${p => p.theme.color.body.dark}; */
  /* margin: 0 ${p => p.theme.padding.layout.small}; */
  /* opacity: 0.35; */
  width: 1rem;
`

export type ToolbarProps = {
  formats?: Array<MarkdownEditorFormat>
}
export const Toolbar: FunctionComponent<ToolbarProps> = ({ formats = DEFAULT_FORMATS }) => (
  <Box>
    <ToolbarBlockList formats={formats} />

    <Separator />

    {formats.includes(MarkdownEditorFormat.STRONG) && (
      <MarkButton format={MarkdownEditorFormat.STRONG} Icon={MaterialFormatBold} />
    )}
    {formats.includes(MarkdownEditorFormat.EM) && (
      <MarkButton format={MarkdownEditorFormat.EM} Icon={MaterialFormatItalic} />
    )}
    {formats.includes(MarkdownEditorFormat.CODE) && (
      <MarkButton format={MarkdownEditorFormat.CODE} Icon={MaterialCode} />
    )}

    <Separator />

    {formats.includes(MarkdownEditorFormat.UL) && (
      <BlockButton format={MarkdownEditorFormat.UL} Icon={MaterialFormatListBulleted} />
    )}
    {formats.includes(MarkdownEditorFormat.OL) && (
      <BlockButton format={MarkdownEditorFormat.OL} Icon={MaterialFormatListNumbered} />
    )}

    <Separator />

    {formats.includes(MarkdownEditorFormat.A) && <LinkButtonGroup />}
  </Box>
)

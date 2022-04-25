/* eslint-disable @typescript-eslint/no-use-before-define */

import * as R from 'ramda'
import remarkParse from 'remark-parse'
import remarkSlate, { serialize as remarkSlateSerialize } from 'remark-slate'
import { Editor, Element, Range, Transforms } from 'slate'
import { unified } from 'unified'

import { LIST_TYPES, MarkdownEditorFormat } from './constants'

import type { BaseEditor, Descendant } from 'slate'
import type { ReactEditor } from 'slate-react'

const deserializer = unified()
  .use(remarkParse as any)
  .use(remarkSlate)

export const deserialize = (sourceAsMarkdown?: string): Descendant[] => {
  const controlledSourceAsMarkdown =
    typeof sourceAsMarkdown !== 'string' || sourceAsMarkdown.trim().length === 0 ? '<br>' : sourceAsMarkdown

  const sourceAsAst = deserializer.processSync(controlledSourceAsMarkdown).result as Descendant[]
  const sourceAsAstWithUnwrappedParagraphs = unwrapDeepParagraphsFromAstNodes(sourceAsAst)

  return sourceAsAstWithUnwrappedParagraphs
}

export const getBlockFormat = (editor: BaseEditor & ReactEditor): MarkdownEditorFormat => {
  const { selection } = editor
  if (selection === null) {
    return MarkdownEditorFormat.P
  }

  switch (true) {
    case isBlockActive(editor, MarkdownEditorFormat.H1):
      return MarkdownEditorFormat.H1

    case isBlockActive(editor, MarkdownEditorFormat.H2):
      return MarkdownEditorFormat.H2

    case isBlockActive(editor, MarkdownEditorFormat.H3):
      return MarkdownEditorFormat.H3

    case isBlockActive(editor, MarkdownEditorFormat.H4):
      return MarkdownEditorFormat.H4

    case isBlockActive(editor, MarkdownEditorFormat.H5):
      return MarkdownEditorFormat.H5

    case isBlockActive(editor, MarkdownEditorFormat.H6):
      return MarkdownEditorFormat.H6

    case isBlockActive(editor, MarkdownEditorFormat.BLOCKQUOTE):
      return MarkdownEditorFormat.BLOCKQUOTE

    default:
      return MarkdownEditorFormat.P
  }
}

export const getBlockProps = (editor: BaseEditor & ReactEditor, format: MarkdownEditorFormat): any => {
  const { selection } = editor
  if (selection === null || !isBlockActive(editor, format)) {
    return {}
  }

  const [[block]] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    }),
  )

  return R.omit(['children', 'type'], block)
}

export const isBlockActive = (editor: BaseEditor & ReactEditor, format: MarkdownEditorFormat): boolean => {
  const { selection } = editor
  if (selection === null) {
    return false
  }

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    }),
  )

  return !!match
}

export const isMarkActive = (editor: BaseEditor & ReactEditor, format: MarkdownEditorFormat): boolean => {
  const marks = Editor.marks(editor)

  return marks ? Boolean(marks[format]) === true : false
}

export const isSelectionCollapsed = (editor: BaseEditor & ReactEditor): boolean => {
  const { selection } = editor
  if (selection === null) {
    return false
  }

  const isCollapsed = Range.isCollapsed(selection)

  return isCollapsed
}

export const serialize = (newValueAsAst: Descendant[]): string => {
  const newValueAsMarkdown = newValueAsAst.map((v: Descendant) => remarkSlateSerialize(v)).join('\n')

  if (newValueAsMarkdown.trim() === '<br>') {
    return ''
  }

  return newValueAsMarkdown
}

export const toggleBlock = (editor: BaseEditor & ReactEditor, format: MarkdownEditorFormat): void => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => !Editor.isEditor(n) && Element.isElement(n) && LIST_TYPES.includes(n.type),
    split: true,
  })
  const newProperties: Partial<Element> = {
    // eslint-disable-next-line no-nested-ternary
    type: isActive ? MarkdownEditorFormat.P : isList ? MarkdownEditorFormat.LI : format,
  }
  Transforms.setNodes<Element>(editor, newProperties)

  if (!isActive && isList) {
    const block: Element = {
      children: [],
      type: format,
    }

    Transforms.wrapNodes(editor, block)
  }
}

export const toggleMark = (editor: BaseEditor & ReactEditor, format: MarkdownEditorFormat): void => {
  const { selection } = editor
  if (selection === null) {
    return
  }

  const isActive = isMarkActive(editor, format)
  const isCollapsed = isSelectionCollapsed(editor)
  if (!isActive && isCollapsed) {
    return
  }

  if (isActive) {
    Editor.removeMark(editor, format)

    return
  }

  Editor.addMark(editor, format, true)
}

export const unwrapInlineBlock = (editor: BaseEditor & ReactEditor, format: MarkdownEditorFormat): void => {
  Transforms.unwrapNodes(editor, {
    match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
  })
}

export const unwrapDeepParagraphsFromAstNodes = (nodes: Descendant[]): Descendant[] =>
  nodes.map(node => {
    if (!Array.isArray(node.children) || node.children.length === 0) {
      return node
    }

    return {
      ...node,
      children: R.pipe(R.map(unwrapParagraphChildrenFromAstNode), R.flatten)(node.children),
    } as Descendant
  })

export const unwrapParagraphChildrenFromAstNode = (node: Descendant): Descendant[] => {
  if (!Array.isArray(node.children) || node.children.length === 0) {
    return [node]
  }

  const children = R.pipe(R.map(unwrapParagraphChildrenFromAstNode), R.flatten)(node.children)

  if (node.type !== MarkdownEditorFormat.P) {
    return [
      {
        ...node,
        children,
      } as Descendant,
    ]
  }

  return children
}

export const wrapOrUpdateInlineBlock = (
  editor: BaseEditor & ReactEditor,
  format: MarkdownEditorFormat,
  newProps: Record<string, string>,
): void => {
  const { selection } = editor
  if (selection === null) {
    return
  }

  const isActive = isMarkActive(editor, format)
  const isCollapsed = isSelectionCollapsed(editor)
  if (!isActive && isCollapsed) {
    return
  }

  if (isActive) {
    Transforms.setNodes(editor, newProps, {
      match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    })

    return
  }

  const inlineElement: Element = {
    type: format,
    ...newProps,
    children: [],
  }

  Transforms.wrapNodes(editor, inlineElement, {
    split: true,
  })
  Transforms.collapse(editor, { edge: 'end' })
}

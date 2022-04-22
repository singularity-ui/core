import * as R from 'ramda'
import remarkParse from 'remark-parse'
import remarkSlate, { serialize as remarkSlateSerialize } from 'remark-slate'
import { Editor as SlateEditor, Element as SlateElement, Transforms } from 'slate'
import { unified } from 'unified'

import type { BaseEditor, Descendant } from 'slate'
import type { ReactEditor } from 'slate-react'

const LIST_TYPES = ['ol_list', 'ul_list']

const deserializer = unified()
  .use(remarkParse as any)
  .use(remarkSlate)

export const deserialize = (sourceAsMarkdown?: string): Descendant[] => {
  if (sourceAsMarkdown === undefined) {
    return []
  }

  const sourceAsAst = deserializer.processSync(sourceAsMarkdown).result as Descendant[]
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const sourceAsAstWithUnwrappedQuotes = unwrapQuotesFromAst(sourceAsAst)

  return sourceAsAstWithUnwrappedQuotes
}

export const isBlockActive = (editor: BaseEditor & ReactEditor, format: string): boolean => {
  const { selection } = editor
  if (!selection) {
    return false
  }

  const [match] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: n => !SlateEditor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    }),
  )

  return !!match
}

export const getBlockProps = (editor: BaseEditor & ReactEditor, format: string): any => {
  const { selection } = editor
  if (!selection || !isBlockActive(editor, format)) {
    return {}
  }

  const [[block]] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: n => !SlateEditor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    }),
  )

  return R.omit(['children', 'type'], block)
}

export const isMarkActive = (editor: BaseEditor & ReactEditor, format: string): boolean => {
  const marks = SlateEditor.marks(editor)

  return marks ? marks[format] === true : false
}

export const unwrapQuotesFromAst = (input: Descendant[]): Descendant[] =>
  input.map(node => {
    if (
      node.type !== 'block_quote' ||
      !Array.isArray(node.children) ||
      node.children.length === 0 ||
      node.children[0].type !== 'paragraph'
    ) {
      return node
    }

    return {
      ...node,
      children: [...node.children[0].children],
    }
  })

export const serialize = (newValueAsAst: Descendant[]): string =>
  newValueAsAst.map((v: Descendant) => remarkSlateSerialize(v)).join('\n')

export const toggleBlock = (editor: BaseEditor & ReactEditor, format: string): void => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => !SlateEditor.isEditor(n) && SlateElement.isElement(n) && LIST_TYPES.includes(n.type),
    split: true,
  })
  const newProperties: Partial<SlateElement> = {
    // eslint-disable-next-line no-nested-ternary
    type: isActive ? 'paragraph' : isList ? 'list_item' : format,
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { children: [], type: format }
    Transforms.wrapNodes(editor, block)
  }
}

export const toggleMark = (editor: BaseEditor & ReactEditor, format: string): void => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    SlateEditor.removeMark(editor, format)
  } else {
    SlateEditor.addMark(editor, format, true)
  }
}

export const updateLink = (editor: BaseEditor & ReactEditor, value: string): void => {
  const isEmpty = value.trim().length === 0

  if (isEmpty) {
    SlateEditor.removeMark(editor, 'link')

    return
  }

  // SlateEditor.removeMark(editor, 'link')
  SlateEditor.addMark(editor, 'link', {
    link: value,
  })
}

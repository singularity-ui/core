/* eslint-disable react/jsx-props-no-spreading, react/prop-types, @typescript-eslint/no-use-before-define */

import BetterPropTypes from 'better-prop-types'
import isHotkey from 'is-hotkey'
import React from 'react'
import remarkParse from 'remark-parse'
import remarkSlate, { serialize } from 'remark-slate'
import { Editor as SlateEditor, createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, withReact } from 'slate-react'
import styled from 'styled-components'
import { unified } from 'unified'

import { SIZE } from '../../common/constants'
import MaterialCode from '../../icons/material/MaterialCode'
import MaterialFormatBold from '../../icons/material/MaterialFormatBold'
import MaterialFormatItalic from '../../icons/material/MaterialFormatItalic'
import MaterialFormatListBulleted from '../../icons/material/MaterialFormatListBulleted'
import MaterialFormatListNumbered from '../../icons/material/MaterialFormatListNumbered'
import MaterialFormatQuote from '../../icons/material/MaterialFormatQuote'
import { BlockButton } from './BlockButton'
import { MarkButton } from './MarkButton'

import type { DOMAttributes, FunctionComponent } from 'react'
import type { BaseEditor, Descendant } from 'slate'
import type { ReactEditor } from 'slate-react'

const Label = styled.label<{
  size: Common.Size
}>`
  display: block;
  font-size: ${p => Math.round(p.theme.typography.size[p.size] * 80)}%;
  font-weight: 500;
  padding: 0 0 ${p => p.theme.padding.layout.tiny} 0;
`

const EditorBox = styled.div<{
  hasError: boolean
}>`
  background-color: ${p => p.theme.color.body.white};
  border: solid 1px ${p => (p.hasError ? p.theme.color.danger.default : p.theme.color.secondary.default)};
  border-radius: ${p => p.theme.appearance.borderRadius.medium};
`

const Toolbar = styled.div`
  align-items: center;
  border-bottom: solid 2px ${p => p.theme.color.secondary.background};
  display: flex;
  padding: ${p => p.theme.padding.layout.medium};
`

const EditableBox = styled.div`
  padding: ${p => p.theme.padding.layout.medium};
`

const Helper = styled.p`
  margin: 0;
  padding: ${p => p.theme.padding.layout.tiny} 0 0 0;
`

const Error = styled.p`
  color: ${p => p.theme.color.danger.default};
  font-weight: 500;
  margin: 0;
  padding: ${p => p.theme.padding.layout.tiny} 0 0 0;
`

type CustomElement = { children: CustomText[]; type: string }
type CustomText = Record<string, any> & {
  text: string
}

// https://docs.slatejs.org/walkthroughs/01-installing-slate
declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const HOTKEYS: Record<string, string> = {
  'mod+`': 'code',
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
}

const deserialize = unified().use(remarkParse).use(remarkSlate)

type MarkdownEditorProps = DOMAttributes<HTMLDivElement> & {
  className?: string
  defaultValue?: string
  error?: string
  helper?: string
  isDisabled?: boolean
  label: string
  onInput?: (newMarkdownSource: string) => void | Promise<void>
  placeholder: string
  size?: Common.Size
}
export const MarkdownEditor: FunctionComponent<MarkdownEditorProps> = ({
  className,
  defaultValue,
  error,
  helper,
  isDisabled = false,
  label,
  onInput,
  placeholder,
  size = SIZE.MEDIUM,
  ...props
}) => {
  const renderElement = React.useCallback(elementProps => <Element {...elementProps} />, [])
  const renderLeaf = React.useCallback(leafProps => <Leaf {...leafProps} />, [])
  const editor = React.useMemo(() => withHistory(withReact(createEditor())), [])

  const defaultValueAsAst = React.useMemo(() => {
    const value = defaultValue === undefined || defaultValue.trim().length === 0 ? placeholder : defaultValue

    return deserialize.processSync(value).result as Descendant[]
  }, [defaultValue])
  const hasError = typeof error === 'string' && error.length > 0

  const handleChange = (newValueAsAst: Descendant[]) => {
    if (onInput === undefined) {
      return
    }

    const newValueAsMarkdown = newValueAsAst.map((v: Descendant) => serialize(v)).join('')

    onInput(newValueAsMarkdown)
  }

  return (
    <div className={className}>
      {label && (
        <Label className="Label" size={size}>
          {label}
        </Label>
      )}

      <EditorBox className="EditorBox" hasError={hasError}>
        <Slate editor={editor} onChange={handleChange} value={defaultValueAsAst}>
          <Toolbar>
            <MarkButton format="bold" Icon={MaterialFormatBold} />
            <MarkButton format="italic" Icon={MaterialFormatItalic} />
            <MarkButton format="code" Icon={MaterialCode} />
            <BlockButton format="block_quote" Icon={MaterialFormatQuote} />
            <BlockButton format="ul-list" Icon={MaterialFormatListBulleted} />
            <BlockButton format="ol_list" Icon={MaterialFormatListNumbered} />
          </Toolbar>

          <EditableBox className="EditableBox">
            <Editable
              disabled={isDisabled}
              onKeyDown={event => {
                // eslint-disable-next-line no-restricted-syntax
                for (const hotkey in HOTKEYS) {
                  if (isHotkey(hotkey, event as any)) {
                    event.preventDefault()

                    const mark = HOTKEYS[hotkey]
                    toggleMark(editor, mark)
                  }
                }
              }}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              spellCheck
              {...props}
            />
          </EditableBox>
        </Slate>
      </EditorBox>

      {!hasError && helper && <Helper className="Helper">{helper}</Helper>}

      {hasError && <Error className="Error">{error}</Error>}
    </div>
  )
}

MarkdownEditor.displayName = 'MarkdownEditor'

MarkdownEditor.propTypes = {
  defaultValue: BetterPropTypes.string.isOptionalButNotNull,
  error: BetterPropTypes.string.isOptionalButNotNull,
  helper: BetterPropTypes.string.isOptionalButNotNull,
  isDisabled: BetterPropTypes.bool.isOptionalButNotNull,
  label: BetterPropTypes.string.isRequired,
  onInput: BetterPropTypes.func.isOptionalButNotNull,
  placeholder: BetterPropTypes.string.isRequired,
}

const toggleMark = (editor: BaseEditor & ReactEditor, format: string) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    SlateEditor.removeMark(editor, format)
  } else {
    SlateEditor.addMark(editor, format, true)
  }
}

const isMarkActive = (editor: BaseEditor & ReactEditor, format: string) => {
  const marks = SlateEditor.marks(editor)

  return marks ? marks[format] === true : false
}

const Element: FunctionComponent<{
  attributes: Record<string, any>
  children: any
  element: CustomElement
}> = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block_quote':
      return <blockquote {...attributes}>{children}</blockquote>

    case 'list-item':
      return <li {...attributes}>{children}</li>

    case 'ol_list':
      return <ol {...attributes}>{children}</ol>

    case 'paragraph':
      return <p {...attributes}>{children}</p>

    case 'ul_list':
    case 'ul-list':
      return <ul {...attributes}>{children}</ul>

    default:
      return <div {...attributes}>{children}</div>
  }
}

const Leaf: FunctionComponent<{
  attributes: Record<string, any>
  children: any
  leaf: Record<string, boolean>
}> = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    // eslint-disable-next-line no-param-reassign
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    // eslint-disable-next-line no-param-reassign
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    // eslint-disable-next-line no-param-reassign
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    // eslint-disable-next-line no-param-reassign
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

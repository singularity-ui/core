import BetterPropTypes from 'better-prop-types'
import isHotkey from 'is-hotkey'
import React from 'react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, withReact } from 'slate-react'
import styled from 'styled-components'

import { SIZE } from '../../common/constants'
import { Error, Helper, Label } from '../shared'
import { Element } from './Element'
import { deserialize, serialize, toggleMark } from './helpers'
import { Leaf } from './Leaf'
import { Toolbar } from './Toolbar'

import type { CustomElement, CustomText } from './types'
import type { DOMAttributes, FunctionComponent, KeyboardEventHandler } from 'react'
import type { BaseEditor, Descendant } from 'slate'
import type { ReactEditor } from 'slate-react'

const EditorBox = styled.div<{
  hasError: boolean
}>`
  background-color: ${p => p.theme.color.body.white};
  border: solid 1px ${p => (p.hasError ? p.theme.color.danger.default : p.theme.color.secondary.default)};
  border-radius: ${p => p.theme.appearance.borderRadius.medium};
  position: relative;

  :focus-within {
    box-shadow: 0 0 0 1px ${p => (p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active)};
  }
`

const EditableBox = styled.div`
  padding: ${p => p.theme.padding.layout.medium};
`

// https://docs.slatejs.org/walkthroughs/01-installing-slate
declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const HOTKEYS: Record<string, string> = {
  // 'mod+`': 'code',
  'mod+b': 'bold',
  'mod+i': 'italic',
  // 'mod+u': 'underline',
}

export type MarkdownEditorProps = Omit<DOMAttributes<HTMLDivElement>, 'onChange'> & {
  className?: string
  defaultValue?: string
  error?: string
  helper?: string
  isDisabled?: boolean
  label: string
  onChange?: (newMarkdownSource: string) => void | Promise<void>
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
  onChange,
  placeholder,
  size = SIZE.MEDIUM,
  ...props
}) => {
  const renderElement = React.useCallback(elementProps => <Element {...elementProps} />, [])
  const renderLeaf = React.useCallback(leafProps => <Leaf {...leafProps} />, [])
  const editor = React.useMemo(() => withHistory(withReact(createEditor())), [])

  const defaultValueAsAst = React.useMemo(() => {
    console.log(deserialize(defaultValue))

    return deserialize(defaultValue)
  }, [defaultValue])
  const hasError = typeof error === 'string' && error.length > 0

  const handleChange = React.useCallback((newValueAsAst: Descendant[]) => {
    if (onChange === undefined) {
      return
    }

    // console.log(newValueAsAst)
    const newValueAsMarkdown = serialize(newValueAsAst)
    // console.log(newValueAsMarkdown)

    onChange(newValueAsMarkdown)
  }, [])

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = React.useCallback(
    event => {
      // eslint-disable-next-line no-restricted-syntax
      for (const hotkey in HOTKEYS) {
        if (isHotkey(hotkey, event)) {
          event.preventDefault()

          const mark = HOTKEYS[hotkey]
          toggleMark(editor, mark)
        }
      }
    },
    [editor],
  )

  return (
    <div className={className}>
      {label && (
        <Label className="Label" size={size}>
          {label}
        </Label>
      )}

      <EditorBox className="EditorBox" hasError={hasError}>
        <Slate editor={editor} onChange={handleChange} value={defaultValueAsAst}>
          <Toolbar />

          <EditableBox className="EditableBox">
            <Editable
              disabled={isDisabled}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              spellCheck
              {...props}
            />
          </EditableBox>
        </Slate>
      </EditorBox>

      {!hasError && helper && (
        <Helper className="Helper" size={size}>
          {helper}
        </Helper>
      )}

      {hasError && (
        <Error className="Error" size={size}>
          {error}
        </Error>
      )}
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
  onChange: BetterPropTypes.func.isOptionalButNotNull,
  placeholder: BetterPropTypes.string.isRequired,
}

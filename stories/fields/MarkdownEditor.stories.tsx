import React from 'react'

import { MarkdownEditor } from '../..'

import type { MarkdownEditorProps } from '../..'

export default {
  title: 'Fields/Markdown Editor',
  component: MarkdownEditor,

  argTypes: {},

  args: {
    defaultValue: ``,
    error: '',
    helper: '',
    isDisabled: false,
    label: '',
    placeholder: 'A amazing Markdown editor!',
    name: 'markdownEditor',
  },
}

export const _MarkdownEditor = (props: MarkdownEditorProps) => {
  const $markdownSource = React.useRef<string>()
  const [isLoading, setIsLoading] = React.useState(true)

  const controlledProps = React.useMemo(() => {
    if (isLoading) {
      return {
        ...props,
        isDisabled: true,
        placeholder: 'Loading example…',
      }
    }

    return {
      ...props,
      defaultValue: $markdownSource.current,
    }
  }, [isLoading])

  const loadExample = React.useCallback(async () => {
    const response = await fetch('/documents/example.md')
    const body = await response.text()

    $markdownSource.current = body
    setIsLoading(false)
  }, [])

  React.useEffect(() => {
    loadExample()
  }, [])

  return <MarkdownEditor {...controlledProps} />
}

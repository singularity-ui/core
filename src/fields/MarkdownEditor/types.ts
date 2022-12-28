import type { MarkdownEditorFormat } from './constants'

export type CustomElement = Record<string, any> & {
  children: CustomText[]
  type: MarkdownEditorFormat
}

export type CustomText = Record<string, any> & {
  text: string
}

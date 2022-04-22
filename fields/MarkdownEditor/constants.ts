export enum MarkdownEditorFormat {
  A = 'link',
  BLOCKQUOTE = 'block_quote',
  CODE = 'code',
  EM = 'italic',
  H1 = 'heading_one',
  H2 = 'heading_two',
  H3 = 'heading_three',
  H4 = 'heading_four',
  H5 = 'heading_five',
  H6 = 'heading_six',
  LI = 'list_item',
  OL = 'ol_list',
  P = 'paragraph',
  STRONG = 'bold',
  UL = 'ul_list',
}

export const INLINE_TYPES = [MarkdownEditorFormat.A]

export const LIST_TYPES = [MarkdownEditorFormat.OL, MarkdownEditorFormat.UL]

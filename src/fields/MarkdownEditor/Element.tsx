import React from 'react'
import { styled } from 'styled-components'

import type { CustomElement } from './types'

const InlineChromiumBugfixBox = styled.span`
  font-size: 0;
`

// Put this at the start and end of an inline component to work around this Chromium bug:
// https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
const InlineChromiumBugfix = () => (
  <InlineChromiumBugfixBox contentEditable={false}>
    ${String.fromCodePoint(160) /* Non-breaking space */}
  </InlineChromiumBugfixBox>
)

export type ElementProps = {
  attributes: Record<string, any>
  children: any
  element: CustomElement
}
export function Element({ attributes, children, element }: ElementProps) {
  switch (element.type) {
    case 'block_quote':
      return <blockquote {...attributes}>{children}</blockquote>

    case 'heading_one':
      return <h1 {...attributes}>{children}</h1>

    case 'heading_two':
      return <h2 {...attributes}>{children}</h2>

    case 'heading_three':
      return <h3 {...attributes}>{children}</h3>

    case 'heading_four':
      return <h4 {...attributes}>{children}</h4>

    case 'heading_five':
      return <h5 {...attributes}>{children}</h5>

    case 'heading_six':
      return <h6 {...attributes}>{children}</h6>

    case 'link':
      return (
        <a href={element.link} {...attributes}>
          <InlineChromiumBugfix />
          {children}
          <InlineChromiumBugfix />
        </a>
      )

    case 'list_item':
      return <li {...attributes}>{children}</li>

    case 'ol_list':
      return <ol {...attributes}>{children}</ol>

    case 'paragraph':
      return <p {...attributes}>{children}</p>

    case 'ul_list':
      return <ul {...attributes}>{children}</ul>

    default:
      return <div {...attributes}>{children}</div>
  }
}

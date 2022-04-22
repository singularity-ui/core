import React from 'react'

import type { CustomElement } from './types'
import type { FunctionComponent } from 'react'

export type ElementProps = {
  attributes: Record<string, any>
  children: any
  element: CustomElement
}
export const Element: FunctionComponent<ElementProps> = ({ attributes, children, element }) => {
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
          {children}
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

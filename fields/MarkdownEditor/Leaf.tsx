import React from 'react'

export type LeafProps = {
  attributes: Record<string, any>
  children: any
  leaf: Record<string, any>
}
export function Leaf({ attributes, children, leaf }: LeafProps) {
  switch (true) {
    case leaf.bold:
      return (
        <span {...attributes}>
          <strong>{children}</strong>
        </span>
      )

    case leaf.code:
      return (
        <span {...attributes}>
          <code>{children}</code>
        </span>
      )

    case leaf.italic:
      return (
        <span {...attributes}>
          <em>{children}</em>
        </span>
      )

    default:
      return <span {...attributes}>{children}</span>
  }
}

import styled from 'styled-components'

import { Item } from './Item'

import type { HTMLAttributes } from 'react'

const StyledVerticalMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;

  li:not(:first-child) > .Link {
    margin-top: ${p => p.theme.padding.layout.small};
  }
`

export type VerticalMenuProps = HTMLAttributes<HTMLUListElement> & {
  size?: Common.Size
}
function BareVerticalMenu({ children, ...props }: VerticalMenuProps) {
  return (
    <nav>
      <StyledVerticalMenu {...props}>{children}</StyledVerticalMenu>
    </nav>
  )
}

BareVerticalMenu.displayName = 'VerticalMenu'

export const VerticalMenu = Object.assign(BareVerticalMenu, {
  Item,
})

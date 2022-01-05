import React from 'react'
import styled from 'styled-components'

import { Item } from './Item'

import type { FunctionComponent, HTMLAttributes } from 'react'

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
const BareVerticalMenu: FunctionComponent<VerticalMenuProps> = ({ children, ...props }) => (
  <nav>
    <StyledVerticalMenu {...props}>{children}</StyledVerticalMenu>
  </nav>
)

BareVerticalMenu.displayName = 'VerticalMenu'

BareVerticalMenu.propTypes = {}

export const VerticalMenu = Object.assign(BareVerticalMenu, {
  Item,
})

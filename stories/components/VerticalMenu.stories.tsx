import React from 'react'
import styled from 'styled-components'

import { VerticalMenu } from '../..'

import type { VerticalMenuProps } from '../..'

const ITEM = {
  DASHBOARD: 'DASHBOARD',
  POST_LIST: 'POST_LIST',
  USER_LIST: 'USERS',
}

const Box = styled.div`
  height: 20rem;
  width: 15rem;
`

export default {
  title: 'Components/Vertical Menu',
  component: VerticalMenu,

  argTypes: {},

  args: {},
}

export const _VerticalMenu = (props: VerticalMenuProps) => {
  const [selectedItem, setSelectedItem] = React.useState(ITEM.DASHBOARD)

  return (
    <Box>
      <VerticalMenu {...props}>
        <VerticalMenu.Item isActive={selectedItem === ITEM.DASHBOARD} onClick={() => setSelectedItem(ITEM.DASHBOARD)}>
          Dashboard
        </VerticalMenu.Item>
        <VerticalMenu.Item isActive={selectedItem === ITEM.POST_LIST} onClick={() => setSelectedItem(ITEM.POST_LIST)}>
          Posts
        </VerticalMenu.Item>
        <VerticalMenu.Item isActive={selectedItem === ITEM.USER_LIST} onClick={() => setSelectedItem(ITEM.USER_LIST)}>
          Users
        </VerticalMenu.Item>
      </VerticalMenu>
    </Box>
  )
}

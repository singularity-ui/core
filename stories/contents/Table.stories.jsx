import Jabber from 'jabber'
import React from 'react'
import { Edit, Trash } from 'react-feather'
import styled from 'styled-components'

import { ACCENT, TYPE } from '../../common/constants'
import SingularityTable from '../../contents/Table'

const jabber = new Jabber()

const DATA = new Array(50).fill(null).map((_, index) => ({
  id: index,
  email: jabber.createEmail(),
  isActive: Math.random() < 0.5,
}))

const StyledTable = styled(SingularityTable)`
  width: 100%;
`

export default {
  title: 'Contents/Table',
  component: SingularityTable,

  argTypes: {},

  args: {
    columns: [
      {
        label: 'ID',
        type: TYPE.ID,
        key: 'id',
      },
      {
        label: 'Email',
        key: 'email',
      },
      {
        label: '',
        type: TYPE.BOOLEAN,
        key: 'isActive',
      },
      {
        label: 'Edit user',
        type: TYPE.ACTION,
        // eslint-disable-next-line no-alert
        action: id => window.alert(`Edit ${id}`),
        accent: ACCENT.SECONDARY,
        Icon: Edit,
      },
      {
        label: 'Delete user',
        type: TYPE.ACTION,
        // eslint-disable-next-line no-alert
        action: id => window.alert(`Delete ${id}`),
        accent: ACCENT.DANGER,
        Icon: Trash,
      },
    ],
    data: DATA,
    isLoading: false,
    perPage: 10,
  },
}

export const Table = props => <StyledTable {...props} />

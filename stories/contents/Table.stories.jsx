import { Delete, Edit } from '@mui/icons-material'
import Jabber from 'jabber'
import React from 'react'
import styled from 'styled-components'

import { ACCENT, TYPE } from '../../common/constants'
import SingularityTable from '../../contents/Table'

const jabber = new Jabber()

const DATA = new Array(50).fill(null).map((_, index) => ({
  id: index,
  name: jabber.createFullName(),
  email: jabber.createEmail(),
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
        label: 'Name',
        key: 'name',
      },
      {
        label: 'Email',
        key: 'email',
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
        Icon: Delete,
      },
    ],
    data: DATA,
    isLoading: false,
    perPage: 10,
  },
}

export const Table = props => <StyledTable {...props} />

import Jabber from 'jabber'
import * as R from 'ramda'
import React from 'react'
import { CheckCircle, XCircle, Edit, Trash } from 'react-feather'
import styled from 'styled-components'

import { ACCENT, TYPE } from '../../common/constants'
import SingularityTable from '../../contents/Table'

const jabber = new Jabber()

const DATA = R.addIndex(R.map)((_, index) => ({
  id: index,
  email: jabber.createEmail(),
  isActive: Math.random() < 0.5,
  organization: {
    name: `${jabber.createWord(6, true)} Inc.`,
  },
}))(new Array(50).fill(null))

const StyledTable = styled(SingularityTable)`
  width: 100%;
`

export default {
  title: 'Contents/Table',
  component: SingularityTable,

  argTypes: {
    defaultSortedKey: {
      options: ['email', 'organization.name'],
      control: { type: 'inline-radio' },
    },
    defaultSortedKeyIsDesc: {
      control: { type: 'boolean' },
    },
  },

  args: {
    columns: [
      {
        label: 'ID',
        key: 'id',
        type: TYPE.ID,
      },
      {
        label: 'Email',
        key: 'email',
        isSortable: true,
      },
      {
        label: 'Organization',
        key: 'organization.name',
        isSortable: true,
      },
      {
        labelOff: 'Activate user account',
        labelOn: 'Disable user account',
        key: 'isActive',
        type: TYPE.TOGGLE,
        action: (id, isOn) =>
          isOn
            ? // eslint-disable-next-line no-alert
              window.alert(`Activate user account with id=${id}.`)
            : // eslint-disable-next-line no-alert
              window.alert(`Disable user account with id=${id}.`),
        IconOff: XCircle,
        IconOn: CheckCircle,
        withTooltip: true,
      },
      {
        label: 'Edit user',
        type: TYPE.ACTION,
        // eslint-disable-next-line no-alert
        action: id => window.alert(`Edit user account with id=${id}.`),
        accent: ACCENT.SECONDARY,
        Icon: Edit,
      },
      {
        label: 'Delete user',
        type: TYPE.ACTION,
        // eslint-disable-next-line no-alert
        action: id => window.alert(`Delete user account with id=${id}.`),
        accent: ACCENT.DANGER,
        Icon: Trash,
      },
    ],
    data: DATA,
    defaultSortedKey: 'email',
    defaultSortedKeyIsDesc: false,
    isLoading: false,
    perPage: 10,
  },
}

export const Table = props => <StyledTable {...props} />

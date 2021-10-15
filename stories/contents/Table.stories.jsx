import Jabber from 'jabber'
import React from 'react'
import { CheckCircle, XCircle, Edit, Trash } from 'react-feather'
import styled from 'styled-components'

import { ACCENT, TYPE } from '../../common/constants'
import SingularityTable from '../../contents/Table'

const jabber = new Jabber()

const DATA = new Array(50).fill(null).map((_, index) => ({
  id: index,
  email: jabber.createEmail(),
  isActive: Math.random() < 0.5,
  organization: {
    name: `${jabber.createWord(6, true)} Inc.`,
  },
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
        key: 'id',
        type: TYPE.ID,
      },
      {
        label: 'Organization',
        key: 'organization.name',
      },
      {
        label: 'Email',
        key: 'email',
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
    isLoading: false,
    perPage: 10,
  },
}

export const Table = props => <StyledTable {...props} />

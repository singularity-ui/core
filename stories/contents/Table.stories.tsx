import Jabber from 'jabber'
import React from 'react'

import { SUI, Table } from '../..'
import MaterialDeleteOutlined from '../../icons/material/MaterialDeleteOutlined'
import MaterialEditOutlined from '../../icons/material/MaterialEditOutlined'
import MaterialPersonOffOutlined from '../../icons/material/MaterialPersonOffOutlined'
import MaterialPersonOutlined from '../../icons/material/MaterialPersonOutlined'

import type { TableColumnProps } from '../..'

const jabber = new Jabber()

const COLUMNS: TableColumnProps[] = [
  {
    label: 'ID',
    key: 'id',
    type: 'id',
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
    label: 'Activated',
    labelOff: 'Activate user account',
    labelOn: 'Disable user account',
    key: 'isActive',
    type: 'boolean',
    action: (id, newValue) =>
      newValue
        ? // eslint-disable-next-line no-alert
          window.alert(`Activate user account with id=${id}.`)
        : // eslint-disable-next-line no-alert
          window.alert(`Disable user account with id=${id}.`),
    IconOff: MaterialPersonOffOutlined,
    IconOn: MaterialPersonOutlined,
    withTooltip: true,
  },
  {
    label: 'Edit user',
    type: 'action',
    // eslint-disable-next-line no-alert
    action: id => window.alert(`Edit user account with id=${id}.`),
    accent: SUI.ACCENT.SECONDARY,
    Icon: MaterialEditOutlined,
  },
  {
    accent: 'danger',
    // eslint-disable-next-line no-alert
    action: id => window.alert(`Delete user account with id=${id}.`),
    Icon: MaterialDeleteOutlined,
    label: 'Delete user',
    type: 'action',
  },
]

const DATA = new Array(100).fill(null).map((_, index) => ({
  id: index + 1,
  email: jabber.createEmail(),
  isActive: Math.random() < 0.5,
  organization: {
    name: `${jabber.createWord(6, true)} Inc.`,
  },
}))

export default {
  title: 'Contents/Table',
  component: Table,

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
    columns: COLUMNS,
    data: DATA,
    defaultSortedKey: 'email',
    defaultSortedKeyIsDesc: false,
    isLoading: false,
    perPage: 10,
  },
}

export const _Table = (props: any) => <Table {...props} />

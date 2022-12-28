import Jabber from 'jabber'
import React from 'react'
import { Edit, Trash, UserCheck, UserX } from 'react-feather'

import { Accent, Table } from '../../src'

import type { TableColumnProps, TableProps } from '../../src'

const getRandomTags = () => new Array(Math.round(Math.random() * 3)).fill(null).map((_, index) => `Tag ${index + 1}`)
const jabber = new Jabber()

const COLUMNS: TableColumnProps[] = [
  {
    label: 'ID',
    key: 'id',
    type: 'id',
  },
  {
    grow: 0.25,
    label: 'Email',
    key: 'email',
    isSortable: true,
  },
  {
    grow: 0.2,
    label: 'Organization',
    key: 'organization.name',
    isSortable: true,
  },
  {
    label: 'Tags',
    key: 'tags',
    type: 'tags',
  },
  {
    label: 'Custom Cell',
    key: 'custom',
    type: 'custom',
    render: ({ value }) => <div style={{ color: 'red' }}>{value}</div>,
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
    IconOff: UserX,
    IconOn: UserCheck,
    withTooltip: true,
  },
  {
    label: 'Edit user',
    type: 'action',
    // eslint-disable-next-line no-alert
    action: id => window.alert(`Edit user account with id=${id}.`),
    accent: Accent.SECONDARY,
    Icon: Edit,
    key: 'edit',
  },
  {
    accent: Accent.DANGER,
    // eslint-disable-next-line no-alert
    action: id => window.alert(`Delete user account with id=${id}.`),
    Icon: Trash,
    key: 'delete',
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
  tags: getRandomTags(),
  custom: jabber.createWord(6, true),
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
    perPage: {
      control: { type: 'number' },
    },
  },

  args: {
    columns: COLUMNS,
    data: DATA,
    defaultSortedKey: 'email',
    defaultSortedKeyIsDesc: false,
    isLoading: false,
    perPage: 5,
  },
}

export const _Table = (props: TableProps) => <Table {...props} />

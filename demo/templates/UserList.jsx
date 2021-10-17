import { Card, SING, Table } from '@ivangabriele/singularity'
import React from 'react'
import { CheckCircle, Edit, Trash, XCircle } from 'react-feather'

import useDatabase from '../hooks/useDatabase'

const BASE_COLUMNS = [
  {
    key: 'id',
    label: 'ID',
    type: SING.TYPE.ID,
  },
  {
    isSortable: true,
    key: 'name',
    label: 'Full Name',
  },
  {
    isSortable: true,
    key: 'organization.name',
    label: 'Organization',
  },
  {
    isSortable: true,
    key: 'email',
    label: 'Email',
  },
]

const noop = () => undefined

export default function UserList() {
  const { data, findByIdAndUpdate } = useDatabase()

  const isLoading = data.users.length === 0

  const toggleUserActivation = (id, isOn) => {
    findByIdAndUpdate('users', id, { isActive: isOn })
  }

  const columns = [
    ...BASE_COLUMNS,
    {
      action: toggleUserActivation,
      IconOff: XCircle,
      IconOn: CheckCircle,
      key: 'isActive',
      labelOff: 'Activate user account',
      labelOn: 'Disable user account',
      type: SING.TYPE.TOGGLE,
      withTooltip: true,
    },
    {
      accent: SING.ACCENT.SECONDARY,
      action: noop,
      Icon: Edit,
      label: 'Edit user',
      type: SING.TYPE.ACTION,
    },
    {
      accent: SING.ACCENT.DANGER,
      action: noop,
      Icon: Trash,
      label: 'Delete user',
      type: SING.TYPE.ACTION,
    },
  ]

  return (
    <>
      <Card>
        <h2>Users</h2>

        <Table columns={columns} data={data.users} defaultSortedKey="email" isLoading={isLoading} />
      </Card>
    </>
  )
}

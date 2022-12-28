import React from 'react'

import { Table } from '../../src'

import type { TableColumnProps } from '../../src'

const COLUMNS: TableColumnProps[] = [
  {
    label: 'Name',
    key: 'name',
  },
  {
    label: 'Airline',
    key: 'airline',
    transform: ({ airline }) => airline[0].name,
  },
  {
    label: 'Trips',
    key: 'trips',
    transform: ({ trips }) => trips || 0,
  },
]

export default {
  title: 'Contents/Table Async',
  component: Table,

  argTypes: {},

  args: {
    columns: COLUMNS,
  },
}

export const TableAsync = (props: any) => {
  const PER_PAGE = 5

  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState([])
  const [pageCount, setPageCount] = React.useState(1)
  const [pageIndex, setPageIndex] = React.useState(0)

  const loadData = async (newPageIndex: number): Promise<void> => {
    setIsLoading(true)

    const response = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${newPageIndex}&size=${PER_PAGE}`)
    const result = await response.json()

    const dataWithId = result.data.map(({ _id, ...rest }: any) => ({ id: _id, ...rest }))

    setPageCount(result.totalPages)
    setPageIndex(newPageIndex)
    setData(dataWithId)
    setIsLoading(false)
  }

  React.useEffect(() => {
    loadData(0)
  }, [])

  return (
    <Table
      data={data}
      isLoading={isLoading}
      onPageChange={loadData}
      pageCount={pageCount}
      pageIndex={pageIndex}
      perPage={PER_PAGE}
      {...props}
    />
  )
}

import React from 'react'

import { Table } from '../..'

import type { TableColumnProps } from '../..'

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

    const url = `https://api.instantwebtools.net/v1/passenger?page=${newPageIndex}&size=${PER_PAGE}`
    const request = new Request(url)
    const response = await fetch(request)
    const result = await response.json()

    setPageCount(result.totalPages)
    setPageIndex(newPageIndex)
    setData(result.data)
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

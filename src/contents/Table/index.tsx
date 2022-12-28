import { forwardRef, useEffect, useState } from 'react'
import { styled } from 'styled-components'

import { SortOrder } from '../../constants'
import { Head } from './Head'
import { getSortOrder, sort } from './helpers'
import { LoadingCell } from './LoadingCell'
import { NoDataCell } from './NoDataCell'
import { Pagination } from './Pagination'
import { Row } from './Row'

import type { Collection } from '../../types'
import type { TableColumnProps, TableColumnKeyFunction } from './types'
import type { ForwardedRef, TableHTMLAttributes } from 'react'

const Box = styled.div`
  table {
    border-spacing: 0;
    width: 100%;
  }

  table > tbody > tr {
    :nth-child(even) {
      background-color: ${p => p.theme.color.list.even};
    }
    :nth-child(odd) {
      background-color: ${p => p.theme.color.list.odd};
    }
    :last-child > td {
      border-bottom: solid 2px ${p => p.theme.color.body.light};
    }

    :hover {
      background-color: ${p => p.theme.color.secondary.background};
    }
  }
`

export type TableProps = TableHTMLAttributes<any> & {
  columns: TableColumnProps[]
  data: Collection
  defaultSortedKey?: string
  defaultSortedKeyIsDesc?: boolean
  isLoading?: boolean
  onPageChange?: (newPageIndex: number) => void | Promise<void>
  pageCount?: number
  pageIndex?: number
  perPage?: number
}
function TableWithRef(
  {
    columns,
    data,
    defaultSortedKey,
    defaultSortedKeyIsDesc = false,
    isLoading = false,
    onPageChange,
    pageCount,
    pageIndex,
    perPage = 10,
    ...props
  }: TableProps,
  ref: ForwardedRef<HTMLTableElement>,
) {
  const [controlledPageIndex, setControlledPageIndex] = useState<number>(pageIndex || 0)
  const [sortedData, setSortedData] = useState<Collection>(sort(data, defaultSortedKey, defaultSortedKeyIsDesc))
  const [sortedKey, setSortedKey] = useState<string | TableColumnKeyFunction | undefined>(defaultSortedKey)
  const [sortedKeyOrder, setSortedKeyOrder] = useState<SortOrder>(getSortOrder(defaultSortedKeyIsDesc))

  const isEmpty = data.length === 0
  const controlledPageCount = pageCount || Math.ceil(data.length / perPage)
  const isSinglePaged = controlledPageCount <= 1

  const startIndex = controlledPageIndex * perPage
  const enIndex = startIndex + perPage
  const visibleData = isLoading || isEmpty ? [] : sortedData.slice(startIndex, enIndex)

  const handlePageChange = (newPageIndex: number): void => {
    if (onPageChange !== undefined) {
      onPageChange(newPageIndex)

      return
    }

    setControlledPageIndex(newPageIndex)
  }

  const sortDataByKey = (key: string | undefined, isDesc: boolean): void => {
    setSortedKey(key)
    setSortedKeyOrder(getSortOrder(isDesc))
    setSortedData(sort(data, key, isDesc))
  }

  useEffect(() => {
    if (sortedKey === null) {
      setSortedData(data)

      return
    }

    setSortedData(sort(data, defaultSortedKey, sortedKeyOrder === SortOrder.DESC))
  }, [data])

  useEffect(() => {
    if (defaultSortedKey === undefined) {
      return
    }

    sortDataByKey(defaultSortedKey, defaultSortedKeyIsDesc)
  }, [defaultSortedKey, defaultSortedKeyIsDesc])

  return (
    <Box>
      <table ref={ref} {...props}>
        <thead>
          <tr>
            {columns.map((column: TableColumnProps) => {
              const sortOrder = column.type !== 'action' && column.key === sortedKey ? sortedKeyOrder : undefined

              return <Head key={column.key} column={column} onSort={sortDataByKey} sortOrder={sortOrder} />
            })}
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <LoadingCell colSpan={columns.length}>Loading…</LoadingCell>
            </tr>
          )}

          {!isLoading && isEmpty && (
            <tr>
              <NoDataCell colSpan={columns.length}>No data.</NoDataCell>
            </tr>
          )}

          {!isLoading &&
            !isEmpty &&
            visibleData.map(dataRow => <Row key={dataRow.id} columns={columns} dataRow={dataRow} />)}
        </tbody>
      </table>

      {!isSinglePaged && (
        <Pagination
          onChange={handlePageChange}
          pageCount={pageCount || controlledPageCount}
          pageIndex={pageIndex || controlledPageIndex}
        />
      )}
    </Box>
  )
}

export const Table = forwardRef(TableWithRef)

Table.displayName = 'Table'

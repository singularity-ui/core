import BetterPropTypes from 'better-prop-types'
import React from 'react'
import styled from 'styled-components'

import { SORT_ORDER } from '../../common/constants'
import { generateKeyFromValue } from '../../helpers/generateKeyFromValue'
import { Head } from './Head'
import { getSortOrder, sort } from './helpers'
import { LoadingCell } from './LoadingCell'
import { NoDataCell } from './NoDataCell'
import { Pagination } from './Pagination'
import { Row } from './Row'
import { ColumnPropType } from './shapes'
import { TableColumnProps, TableColumnKeyFunction } from './types'

import type { ForwardRefRenderFunction, TableHTMLAttributes } from 'react'

const Box = styled.div`
  table {
    border-spacing: 0;
    width: 100%;
  }

  table > tbody > tr:nth-child(even) {
    background-color: ${p => p.theme.color.list.even};
  }
  table > tbody > tr:nth-child(odd) {
    background-color: ${p => p.theme.color.list.odd};
  }

  table > tbody > tr:last-child > td {
    border-bottom: solid 2px ${p => p.theme.color.body.light};
  }
`

export type TableProps = TableHTMLAttributes<any> & {
  columns: TableColumnProps[]
  data: Common.Collection
  defaultSortedKey?: string
  defaultSortedKeyIsDesc?: boolean
  isLoading?: boolean
  onPageChange?: (newPageIndex: number) => void | Promise<void>
  pageCount?: number
  pageIndex?: number
  perPage?: number
}
const TableWithRef: ForwardRefRenderFunction<HTMLTableElement, TableProps> = (
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
  },
  ref,
) => {
  const [controlledPageIndex, setControlledPageIndex] = React.useState<number>(pageIndex || 0)
  const [sortedData, setSortedData] = React.useState<Common.Collection>(
    sort(data, defaultSortedKey, defaultSortedKeyIsDesc),
  )
  const [sortedKey, setSortedKey] = React.useState<string | TableColumnKeyFunction | undefined>(defaultSortedKey)
  const [sortedKeyOrder, setSortedKeyOrder] = React.useState<Common.SortOrder>(getSortOrder(defaultSortedKeyIsDesc))

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

  React.useEffect(() => {
    if (sortedKey === null) {
      setSortedData(data)

      return
    }

    setSortedData(sort(data, defaultSortedKey, sortedKeyOrder === SORT_ORDER.DESC))
  }, [data])

  React.useEffect(() => {
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

              return <Head key={column.label} column={column} onSort={sortDataByKey} sortOrder={sortOrder} />
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
            visibleData.map(dataRow => <Row key={generateKeyFromValue(dataRow)} columns={columns} dataRow={dataRow} />)}
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

export const Table = React.forwardRef(TableWithRef)

Table.displayName = 'Table'

Table.propTypes = {
  columns: BetterPropTypes.arrayOf(ColumnPropType.isRequired).isRequired,
  data: BetterPropTypes.arrayOf(BetterPropTypes.any.isRequired).isRequired,
  defaultSortedKey: BetterPropTypes.string.isOptionalButNotNull,
  defaultSortedKeyIsDesc: BetterPropTypes.bool.isOptionalButNotNull,
  isLoading: BetterPropTypes.bool.isOptionalButNotNull,
  // onPageChange: BetterPropTypes.func.isOptionalButNotNull,
  pageCount: BetterPropTypes.number.isOptionalButNotNull,
  pageIndex: BetterPropTypes.number.isOptionalButNotNull,
  perPage: BetterPropTypes.number.isOptionalButNotNull,
}

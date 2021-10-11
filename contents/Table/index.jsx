import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Head from './Head'
import LoadingCell from './LoadingCell'
import NoDataCell from './NoDataCell'
import Pagination from './Pagination'
import Row from './Row'
import { ColumnShape } from './shapes'

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

const Table = React.forwardRef(({ columns, data, isLoading, perPage, ...props }, ref) => {
  const [pageIndex, setPageIndex] = React.useState(0)

  const isEmpty = data.length === 0
  const pageCount = Math.ceil(data.length / perPage)
  const isSinglePaged = pageCount <= 1

  const startIndex = pageIndex * perPage
  const enIndex = startIndex + perPage
  const visibleData = isLoading || isEmpty ? [] : data.slice(startIndex, enIndex)

  return (
    <Box>
      <table ref={ref} {...props}>
        <thead>
          <tr>{columns.map(Head)}</tr>
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
            visibleData.map((dataRow, rowIndex) => (
              <Row key={String(dataRow.id || rowIndex)} columns={columns} data={dataRow} />
            ))}
        </tbody>
      </table>

      {!isSinglePaged && (
        <Pagination
          initialPage={pageIndex}
          onPageChange={({ selected }) => setPageIndex(selected)}
          pageCount={pageCount}
          pageRangeDisplayed={3}
        />
      )}
    </Box>
  )
})

Table.displayName = 'Table'

Table.defaultProps = {
  data: [],
  isLoading: false,
  perPage: 10,
}

Table.propTypes = {
  columns: PropTypes.arrayOf(ColumnShape).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  perPage: PropTypes.number,
}

export default Table

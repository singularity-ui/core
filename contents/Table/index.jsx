import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Head from './Head'
import LoadingCell from './LoadingCell'
import NoDataCell from './NoDataCell'
import Row from './Row'
import { ColumnShape } from './shapes'

const StyledTable = styled.table`
  border-spacing: 0;

  tbody > tr:nth-child(even) {
    background-color: ${p => p.theme.color.list.even};
  }
  tbody > tr:nth-child(odd) {
    background-color: ${p => p.theme.color.list.odd};
  }
`

const Table = React.forwardRef(({ columns, data, isLoading, ...props }, ref) => (
  <StyledTable ref={ref} {...props}>
    <thead>
      <tr>{columns.map(Head)}</tr>
    </thead>
    <tbody>
      {isLoading && (
        <tr>
          <LoadingCell colSpan={columns.length}>Loading…</LoadingCell>
        </tr>
      )}

      {!isLoading && data.length === 0 && (
        <tr>
          <NoDataCell colSpan={columns.length}>No data.</NoDataCell>
        </tr>
      )}

      {!isLoading &&
        data.length > 0 &&
        data.map((dataRow, rowIndex) => <Row key={String(dataRow.id || rowIndex)} columns={columns} data={dataRow} />)}
    </tbody>
  </StyledTable>
))

Table.displayName = 'Table'

Table.defaultProps = {
  data: [],
  isLoading: false,
}

Table.propTypes = {
  columns: PropTypes.arrayOf(ColumnShape).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
}

export default Table

import PropTypes from 'prop-types'
import React from 'react'
// import styled from 'styled-components'

import Cell from './Cell'
import { ColumnShape } from './shapes'

const TableRow = ({ columns, data }) => (
  <tr>
    {columns.map((column, index) => (
      <Cell key={String(index)} column={column} data={data} />
    ))}
  </tr>
)

TableRow.propTypes = {
  columns: PropTypes.arrayOf(ColumnShape).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default TableRow

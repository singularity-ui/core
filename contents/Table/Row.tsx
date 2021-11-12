import PropTypes from 'prop-types'
import React from 'react'
// import styled from 'styled-components'

import { Cell } from './Cell'
import { ColumnShape } from './shapes'

export const Row = ({ columns, data }) => (
  <tr>
    {columns.map((column, index) => (
      <Cell key={String(index)} column={column} data={data} />
    ))}
  </tr>
)

Row.propTypes = {
  columns: PropTypes.arrayOf(ColumnShape).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

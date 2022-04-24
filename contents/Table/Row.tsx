import BetterPropTypes from 'better-prop-types'
import React, { FunctionComponent } from 'react'

import { Cell } from './Cell'
import { ColumnPropType } from './shapes'
import { TableColumnProps } from './types'

type RowProps = {
  columns: TableColumnProps[]
  dataRow: Common.CollectionItem
}
export const Row: FunctionComponent<RowProps> = ({ columns, dataRow }) => (
  <tr>
    {columns.map(column => (
      <Cell key={`${dataRow.id}-${column.key}`} column={column} dataRow={dataRow} />
    ))}
  </tr>
)

Row.propTypes = {
  columns: BetterPropTypes.arrayOf(ColumnPropType.isRequired).isRequired,
  dataRow: BetterPropTypes.any.isRequired,
}

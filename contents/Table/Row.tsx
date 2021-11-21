import BetterPropTypes from 'better-prop-types'
import React, { FunctionComponent } from 'react'

import { Cell } from './Cell'
import { ColumnShape } from './shapes'
import { TableColumn } from './types'

type RowProps = {
  columns: TableColumn[]
  data: Common.CollectionItem
}
export const Row: FunctionComponent<RowProps> = ({ columns, data }) => (
  <tr>
    {columns.map((column, index) => (
      <Cell key={String(index)} column={column} data={data} />
    ))}
  </tr>
)

Row.propTypes = {
  columns: BetterPropTypes.arrayOf(ColumnShape.isRequired).isRequired,
  data: BetterPropTypes.arrayOf(BetterPropTypes.any).isRequired,
}

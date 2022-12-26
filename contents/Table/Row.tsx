import { Cell } from './Cell'

import type { TableColumnProps } from './types'

type RowProps = {
  columns: TableColumnProps[]
  dataRow: Common.CollectionItem
}
export function Row({ columns, dataRow }: RowProps) {
  return (
    <tr>
      {columns.map(column => (
        <Cell key={`${dataRow.id}-${column.key}`} column={column} dataRow={dataRow} />
      ))}
    </tr>
  )
}

export type TableColumnKeyFunction<T> = (dataRow: Common.CollectionItem) => T

export type TableActionColumn = {
  Icon: any
  accent: Common.Accent
  action: (id: any) => void | Promise<void>
  label: string
  type: 'action'
  withTooltip?: boolean
}

export type TableBooleanColumn = {
  IconOff?: any
  IconOn?: any
  action?: (id: any, newValue: boolean) => void | Promise<void>
  key: string | TableColumnKeyFunction<boolean>
  label: string
  labelOff: string
  labelOn: string
  type: 'boolean'
  withTooltip?: boolean
}

export type TableValueColumn = {
  isSortable?: boolean
  key: string | TableColumnKeyFunction<any>
  label: string
  type?: 'id' | 'tags'
}

export type TableColumn = TableActionColumn | TableBooleanColumn | TableValueColumn

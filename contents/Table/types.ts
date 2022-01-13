export type TableColumnKeyFunction<T = any> = (dataRow: Common.CollectionItem) => T

export type TableActionColumnProps = {
  Icon: any
  accent: Common.Accent
  action: (id: any) => void | Promise<void>
  label: string
  type: 'action'
  withTooltip?: boolean
}

export type TableBooleanColumnProps = {
  IconOff?: any
  IconOn?: any
  action?: (id: any, newValue: boolean) => void | Promise<void>
  key: string
  label: string
  labelOff: string
  labelOn: string
  type: 'boolean'
  withTooltip?: boolean
}

export type TableValueColumnProps = {
  isSortable?: boolean
  key: string
  label: string
  transform?: TableColumnKeyFunction
  type?: 'id' | 'tags'
}

export type TableColumnProps = TableActionColumnProps | TableBooleanColumnProps | TableValueColumnProps

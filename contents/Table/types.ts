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
  transform?: TableColumnKeyFunction
  type: 'boolean'
  withTooltip?: boolean
}

export type TableTagsColumnProps = {
  grow?: number
  key: string
  label: string
  transform?: TableColumnKeyFunction
  type: 'tags'
}

export type TableValueColumnProps = {
  grow?: number
  isSortable?: boolean
  key: string
  label: string
  transform?: TableColumnKeyFunction
  type?: 'id'
}

export type TableColumnProps =
  | TableActionColumnProps
  | TableBooleanColumnProps
  | TableTagsColumnProps
  | TableValueColumnProps

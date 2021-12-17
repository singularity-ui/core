declare namespace Common {
  type Accent = 'danger' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
  type Size = 'large' | 'medium' | 'small'
  type SortOrder = 'asc' | 'desc'
  type Type = 'action' | 'boolean' | 'id' | 'tags'

  type Call = (...params: any[]) => any | Promise<any>

  type Collection = CollectionItem[]
  type CollectionItem = {
    [key: string]: any
  }

  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
  }
}

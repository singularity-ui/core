declare namespace Common {
  type Accent = 'danger' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
  type Size = 'large' | 'medium' | 'small'
  type SortOrder = 'asc' | 'desc'
  type Type = 'action' | 'boolean' | 'id' | 'tags'

  type Collection = CollectionItem[]
  type CollectionItem = {
    [key: string]: any
  }

  type Call = (...params: any[]) => any | Promise<any>
}

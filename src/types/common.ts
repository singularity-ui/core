export type Call = (...params: any[]) => any | Promise<any>

export type Collection = CollectionItem[]
export type CollectionItem = {
  [key: string]: any
  id: string
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

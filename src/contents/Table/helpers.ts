import * as R from 'ramda'

import { SortOrder } from '../../constants'

import type { Collection, CollectionItem } from '../../types'

export const dottedPath: (key: string) => (collectionItem: CollectionItem) => any = key => R.path(key.split('.'))

export const getSortOrder = (isDesc: boolean): SortOrder => (isDesc ? SortOrder.DESC : SortOrder.ASC)

export const sort = (data: Collection, keyDottedPath: string | undefined, isDesc: boolean): Collection => {
  if (typeof keyDottedPath !== 'string' || keyDottedPath.length === 0) {
    return data
  }

  const sortingComparator = isDesc ? R.descend(dottedPath(keyDottedPath)) : R.ascend(dottedPath(keyDottedPath))

  return R.sort(sortingComparator)(data)
}

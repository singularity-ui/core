import * as R from 'ramda'

import { SORT_ORDER } from '../../common/constants'

export const dottedPath: (key: string) => (collectionItem: Common.CollectionItem) => any = key => R.path(key.split('.'))

export const getSortOrder = (isDesc: boolean): Common.SortOrder => (isDesc ? SORT_ORDER.DESC : SORT_ORDER.ASC)

export const sort = (
  data: Common.Collection,
  keyDottedPath: string | undefined,
  isDesc: boolean,
): Common.Collection => {
  if (typeof keyDottedPath !== 'string' || keyDottedPath.length === 0) {
    return data
  }

  const sortingComparator = isDesc ? R.descend(dottedPath(keyDottedPath)) : R.ascend(dottedPath(keyDottedPath))

  return R.sort(sortingComparator)(data)
}

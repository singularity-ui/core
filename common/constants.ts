/* eslint-disable sort-keys-fix/sort-keys-fix */

export const ACCENT: {
  [key: string]: Common.Accent
} = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
}

export const ACCENTS: Array<Common.Accent> = Object.values(ACCENT)

export const SIZE: {
  [key: string]: Common.Size
} = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export const SIZES: Array<Common.Size> = Object.values(SIZE)

export const SORT_ORDER: {
  [key: string]: Common.SortOrder
} = {
  ASC: 'asc',
  DESC: 'desc',
}

export const SORT_ORDERS: Array<Common.SortOrder> = Object.values(SORT_ORDER)

export const TYPE: {
  [key: string]: Common.Type
} = {
  ACTION: 'action',
  BOOLEAN: 'boolean',
  ID: 'id',
  TAGS: 'tags',
}

export const TYPES: Array<Common.Type> = Object.values(TYPE)

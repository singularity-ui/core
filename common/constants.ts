/* eslint-disable sort-keys-fix/sort-keys-fix */

export const ACCENT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
} as {
  [key: string]: 'danger' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
}

export const ACCENTS = Object.values(ACCENT) as Array<
  'danger' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
>

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as {
  [key: string]: 'medium' | 'large' | 'small'
}

export const SIZES = Object.values(SIZE) as Array<'medium' | 'large' | 'small'>

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
}

export const SORT_ORDERS = Object.values(SORT_ORDER)

export const TYPE = {
  ACTION: 'action',
  BOOLEAN: 'boolean',
  ID: 'id',
  NUMBER: 'number',
  SINCE: 'since',
  STRING: 'string',
  TAGS: 'tags',
  TOGGLE: 'toggle',
}

export const TYPES = Object.values(TYPE)

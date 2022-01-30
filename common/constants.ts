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

/* eslint-disable typescript-sort-keys/string-enum */
export enum UNIT {
  U1 = 0.0625,
  U2 = 0.125,
  U3 = 0.1875,
  U4 = 0.25,
  U5 = 0.3125,
  U6 = 0.375,
  U7 = 0.4375,
  U8 = 0.5,
  U10 = 0.625,
  U16 = 1,
  U32 = 2,
  U64 = 4,
}
/* eslint-enable typescript-sort-keys/string-enum */

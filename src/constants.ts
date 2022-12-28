/* eslint-disable sort-keys-fix/sort-keys-fix, typescript-sort-keys/string-enum */

export enum Accent {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

export const ACCENTS = Object.values(Accent)

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export const SIZES = Object.values(Size)

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export const SORT_ORDERS = Object.values(SortOrder)

export enum Type {
  ACTION = 'action',
  BOOLEAN = 'boolean',
  ID = 'id',
  TAGS = 'tags',
}

export const TYPES = Object.values(Type)

export enum Unit {
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

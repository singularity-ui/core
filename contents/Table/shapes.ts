/* eslint-disable import/prefer-default-export */

import BetterPropTypes from 'better-prop-types'

import { ACCENTS } from '../../common/constants'

export const ActionColumnPropType = BetterPropTypes.exact({
  accent: BetterPropTypes.oneOf(ACCENTS).isRequired,
  action: BetterPropTypes.func.isRequired,
  Icon: BetterPropTypes.elementType.isRequired,
  key: BetterPropTypes.string.isRequired,
  label: BetterPropTypes.string.isRequired,
  type: BetterPropTypes.oneOf<'action'>(['action']).isRequired,
  withTooltip: BetterPropTypes.bool.isOptionalButNotNull,
})

export const BooleanColumnPropType = BetterPropTypes.exact({
  action: BetterPropTypes.func.isOptionalButNotNull,
  IconOff: BetterPropTypes.elementType.isOptionalButNotNull,
  IconOn: BetterPropTypes.elementType.isOptionalButNotNull,
  key: BetterPropTypes.string.isRequired,
  label: BetterPropTypes.string.isRequired,
  labelOff: BetterPropTypes.string.isRequired,
  labelOn: BetterPropTypes.string.isRequired,
  transform: BetterPropTypes.func.isOptionalButNotNull,
  type: BetterPropTypes.oneOf<'boolean'>(['boolean']).isRequired,
  withTooltip: BetterPropTypes.bool.isOptionalButNotNull,
})

export const TagsColumnPropType = BetterPropTypes.exact({
  grow: BetterPropTypes.number.isOptionalButNotNull,
  key: BetterPropTypes.string.isRequired,
  label: BetterPropTypes.string.isRequired,
  transform: BetterPropTypes.func.isOptionalButNotNull,
  type: BetterPropTypes.oneOf<'tags'>(['tags']).isOptionalButNotNull,
})

export const ValueColumnPropType = BetterPropTypes.exact({
  grow: BetterPropTypes.number.isOptionalButNotNull,
  isSortable: BetterPropTypes.bool.isOptionalButNotNull,
  key: BetterPropTypes.string.isRequired,
  label: BetterPropTypes.string.isRequired,
  transform: BetterPropTypes.func.isOptionalButNotNull,
  type: BetterPropTypes.oneOf<'id'>(['id']).isOptionalButNotNull,
})

export const CustomColumnPropType = BetterPropTypes.exact({
  grow: BetterPropTypes.number.isOptionalButNotNull,
  key: BetterPropTypes.string.isRequired,
  label: BetterPropTypes.string.isRequired,
  render: BetterPropTypes.any.isRequired,
  type: BetterPropTypes.oneOf<'custom'>(['custom']).isOptionalButNotNull,
})

export const ColumnPropType = BetterPropTypes.oneOfType([
  ActionColumnPropType.isRequired,
  BooleanColumnPropType.isRequired,
  TagsColumnPropType.isRequired,
  ValueColumnPropType.isRequired,
  CustomColumnPropType.isRequired,
])

/* eslint-disable import/prefer-default-export */

import BetterPropTypes from 'better-prop-types'

import { ACCENTS } from '../../common/constants'

export const ActionColumnPropType = BetterPropTypes.exact({
  accent: BetterPropTypes.oneOf(ACCENTS).isRequired,
  action: BetterPropTypes.func.isRequired,
  Icon: BetterPropTypes.elementType.isRequired,
  label: BetterPropTypes.string.isRequired,
  type: BetterPropTypes.oneOf<'action'>(['action']).isRequired,
  withTooltip: BetterPropTypes.bool.isOptionalButNotNull,
})

export const BooleanColumnPropType = BetterPropTypes.exact({
  action: BetterPropTypes.func.isOptionalButNotNull,
  IconOff: BetterPropTypes.elementType.isOptionalButNotNull,
  IconOn: BetterPropTypes.elementType.isOptionalButNotNull,
  key: BetterPropTypes.oneOfType([BetterPropTypes.string, BetterPropTypes.func]).isRequired,
  label: BetterPropTypes.string.isRequired,
  labelOff: BetterPropTypes.string.isRequired,
  labelOn: BetterPropTypes.string.isRequired,
  type: BetterPropTypes.oneOf<'boolean'>(['boolean']).isRequired,
  withTooltip: BetterPropTypes.bool.isOptionalButNotNull,
})

export const ValueColumnPropType = BetterPropTypes.exact({
  isSortable: BetterPropTypes.bool.isOptionalButNotNull,
  key: BetterPropTypes.oneOfType([BetterPropTypes.string, BetterPropTypes.func]).isRequired,
  label: BetterPropTypes.string.isRequired,
  type: BetterPropTypes.oneOf<'id' | 'tags'>(['id', 'tags']).isOptionalButNotNull,
})

export const ColumnPropType = BetterPropTypes.oneOfType([
  ActionColumnPropType.isRequired,
  BooleanColumnPropType.isRequired,
  ValueColumnPropType.isRequired,
])
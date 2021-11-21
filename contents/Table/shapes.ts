/* eslint-disable import/prefer-default-export */

import BetterPropTypes from 'better-prop-types'

import { ACCENTS } from '../../common/constants'

export const ActionColumnShape = BetterPropTypes.exact({
  accent: BetterPropTypes.oneOf(ACCENTS).isRequired,
  action: BetterPropTypes.func.isNotNull,
  Icon: BetterPropTypes.element.isRequired,
  label: BetterPropTypes.string.isRequired,
  type: BetterPropTypes.oneOf<'action'>(['action']).isRequired,
  withTooltip: BetterPropTypes.bool.isNotNull,
})

export const BooleanColumnShape = BetterPropTypes.exact({
  action: BetterPropTypes.func.isNotNull,
  IconOff: BetterPropTypes.element.isNotNull,
  IconOn: BetterPropTypes.element.isNotNull,
  key: BetterPropTypes.oneOfType([BetterPropTypes.string, BetterPropTypes.func]).isRequired,
  label: BetterPropTypes.string.isRequired,
  labelOff: BetterPropTypes.string.isRequired,
  labelOn: BetterPropTypes.string.isRequired,
  type: BetterPropTypes.oneOf<'boolean'>(['boolean']).isRequired,
  withTooltip: BetterPropTypes.bool.isNotNull,
})

export const ValueColumnShape = BetterPropTypes.exact({
  isSortable: BetterPropTypes.bool.isNotNull,
  key: BetterPropTypes.oneOfType([BetterPropTypes.string, BetterPropTypes.func]).isRequired,
  label: BetterPropTypes.string.isRequired,
  type: BetterPropTypes.oneOf<'id' | 'tags'>(['id', 'tags']).isNotNull,
})

export const ColumnShape = BetterPropTypes.oneOfType([ActionColumnShape, BooleanColumnShape, ValueColumnShape])

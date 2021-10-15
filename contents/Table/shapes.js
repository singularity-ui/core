/* eslint-disable import/prefer-default-export */

import PropTypes from 'prop-types'

import { ACCENTS, TYPE, TYPES } from '../../common/constants'

export const ColumnShape = PropTypes.oneOfType([
  PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(TYPES),
    withTooltip: PropTypes.bool,
  }),
  PropTypes.shape({
    accent: PropTypes.oneOf(ACCENTS).isRequired,
    action: PropTypes.func.isRequired,
    Icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf([TYPE.ACTION]),
    withTooltip: PropTypes.bool,
  }),
  PropTypes.shape({
    action: PropTypes.func.isRequired,
    IconOff: PropTypes.elementType.isRequired,
    IconOn: PropTypes.elementType.isRequired,
    labelOff: PropTypes.string.isRequired,
    labelOn: PropTypes.string.isRequired,
    type: PropTypes.oneOf([TYPE.TOGGLE]),
    withTooltip: PropTypes.bool,
  }),
])

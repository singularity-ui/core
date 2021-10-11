/* eslint-disable import/prefer-default-export */

import PropTypes from 'prop-types'

import { ACCENTS, TYPES } from '../../common/constants'

export const ColumnShape = PropTypes.oneOfType([
  PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(TYPES),
  }),
  PropTypes.shape({
    accent: PropTypes.oneOf(ACCENTS).isRequired,
    action: PropTypes.func.isRequired,
    Icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(TYPES),
  }),
])

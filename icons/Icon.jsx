import PropTypes from 'prop-types'
import styled from 'styled-components'

// eslint-disable-next-line import/extensions
import { ACCENT, ACCENTS, SIZE, SIZES } from '../common/constants.js'

const Icon = styled.svg`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`

Icon.defaultProps = {
  accent: ACCENT.PRIMARY,
  size: SIZE.MEDIUM,
}

Icon.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES),
}

export default Icon

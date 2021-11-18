import PropTypes from 'prop-types'
import styled from 'styled-components'

// eslint-disable-next-line import/extensions
import { ACCENT, ACCENTS, SIZE, SIZES } from '../common/constants'

interface IconProps {
  accent: Common.Accent
  size: Common.Size
}

const Icon = styled.svg.attrs<Partial<IconProps>>(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM,
}))<Partial<IconProps>>`
  height: calc(${p => p.theme.typography.size[(p as IconProps).size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[(p as IconProps).size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[(p as IconProps).accent].active};
  }
`

Icon.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES),
}

export default Icon

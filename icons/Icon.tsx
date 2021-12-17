import BetterPropTypes from 'better-prop-types'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

// eslint-disable-next-line import/extensions
import { ACCENT, ACCENTS, SIZE, SIZES } from '../common/constants'

export type IconProps = HTMLAttributes<SVGElement> & {
  accent?: Common.Accent
  size?: Common.Size
}
export const Icon = styled.svg<IconProps>`
  height: calc(${p => p.theme.typography.size[p.size || SIZE.MEDIUM]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size || SIZE.MEDIUM]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent || ACCENT.PRIMARY].active};
  }
`

Icon.propTypes = {
  accent: BetterPropTypes.oneOf(ACCENTS).isOptionalButNotNull,
  size: BetterPropTypes.oneOf(SIZES).isOptionalButNotNull,
}

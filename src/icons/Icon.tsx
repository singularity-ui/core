import { styled } from 'styled-components'

import { Accent, Size } from '../constants'

import type { HTMLAttributes } from 'react'

export type IconProps = HTMLAttributes<SVGElement> & {
  accent?: Accent
  size?: Size
}
export const Icon = styled.svg<IconProps>`
  height: calc(${p => p.theme.typography.size[p.size || Size.MEDIUM]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size || Size.MEDIUM]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent || Accent.PRIMARY].active};
  }
`

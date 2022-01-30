/* eslint-disable react/require-default-props */

import BetterPropTypes from 'better-prop-types'
import React from 'react'
import styled from 'styled-components'

import { ACCENT, ACCENTS, SIZE, SIZES } from '../common/constants'
import { getLowerFontSize } from '../helpers/getLowerFontSize'

import type { ForwardRefRenderFunction, HTMLAttributes } from 'react'

const StyledTag = styled.span<{
  accent: Common.Accent
  size: Common.Size
}>`
  background-color: ${p => p.theme.color[p.accent].background};
  border-radius: ${p => p.theme.appearance.borderRadius[p.size]};
  color: ${p => p.theme.color.body.black};
  font-size: ${p => getLowerFontSize(p.theme, p.size)};
  font-weight: 400;
  padding: ${p => p.theme.padding.tag[p.size]};
`

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  accent?: Common.Accent
  size?: Common.Size
}
export const TagWithRef: ForwardRefRenderFunction<HTMLSpanElement, TagProps> = (
  { accent = ACCENT.PRIMARY, children, size = SIZE.MEDIUM, ...props }: TagProps,
  ref,
) => (
  <StyledTag ref={ref} accent={accent} className="Tag" size={size} {...props}>
    {children}
  </StyledTag>
)

export const Tag = React.forwardRef(TagWithRef)

Tag.displayName = 'Tag'

Tag.propTypes = {
  accent: BetterPropTypes.oneOf(ACCENTS).isOptionalButNotNull,
  size: BetterPropTypes.oneOf(SIZES).isOptionalButNotNull,
}

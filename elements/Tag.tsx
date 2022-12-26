/* eslint-disable react/require-default-props */

import { forwardRef } from 'react'
import styled from 'styled-components'

import { ACCENT, SIZE } from '../common/constants'
import { getLowerFontSize } from '../helpers/getLowerFontSize'

import type { ForwardedRef, HTMLAttributes } from 'react'

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
function TagWithRef(
  { accent = ACCENT.PRIMARY, children, size = SIZE.MEDIUM, ...props }: TagProps,
  ref: ForwardedRef<HTMLSpanElement>,
) {
  return (
    <StyledTag ref={ref} accent={accent} className="Tag" size={size} {...props}>
      {children}
    </StyledTag>
  )
}

TagWithRef.displayName = 'Tag'

export const Tag = forwardRef(TagWithRef)

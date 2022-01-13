import BetterPropTypes from 'better-prop-types'
import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'

import type { DOMAttributes, ForwardRefRenderFunction } from 'react'

const StyledField = styled.div<{
  size: Common.Size
}>`
  padding: ${p => p.theme.padding.input[p.size]} 0;
`

export type FieldProps = DOMAttributes<HTMLDivElement> & {
  size?: Common.Size
}
export const ButtonWithRef: ForwardRefRenderFunction<HTMLDivElement, FieldProps> = (
  { children, size = SIZE.MEDIUM, ...props }: FieldProps,
  ref,
) => (
  <StyledField ref={ref} size={size} {...props}>
    {children}
  </StyledField>
)

export const Field = React.forwardRef(ButtonWithRef)

Field.displayName = 'Button'

Field.propTypes = {
  size: BetterPropTypes.oneOf(SIZES).isOptionalButNotNull,
}

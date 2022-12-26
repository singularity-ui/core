import { forwardRef } from 'react'
import styled from 'styled-components'

import { SIZE } from '../common/constants'

import type { DOMAttributes, ForwardedRef } from 'react'

const StyledField = styled.div<{
  size: Common.Size
}>`
  padding: ${p => p.theme.padding.input[p.size]} 0;
`

export type FieldProps = DOMAttributes<HTMLDivElement> & {
  size?: Common.Size
}
function FieldWithRef({ children, size = SIZE.MEDIUM, ...props }: FieldProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <StyledField ref={ref} size={size} {...props}>
      {children}
    </StyledField>
  )
}

FieldWithRef.displayName = 'Field'

export const Field = forwardRef(FieldWithRef)

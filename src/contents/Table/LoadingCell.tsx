import { styled } from 'styled-components'

import type { TdHTMLAttributes } from 'react'

const StyledTd = styled.td`
  padding: ${p => p.theme.padding.layout.medium};
`

export function LoadingCell({ children, ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <StyledTd {...props}>{children}</StyledTd>
}

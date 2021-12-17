import React, { FunctionComponent, TdHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledTd = styled.td`
  padding: ${p => p.theme.padding.layout.medium};
`

export const LoadingCell: FunctionComponent<TdHTMLAttributes<HTMLTableCellElement>> = ({ children, ...props }) => (
  <StyledTd {...props}>{children}</StyledTd>
)

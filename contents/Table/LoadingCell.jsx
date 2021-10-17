import React from 'react'
import styled from 'styled-components'

const StyledTd = styled.td`
  padding: ${p => p.theme.padding.layout.medium};
`

const LoadingCell = ({ children, ...props }) => <StyledTd {...props}>{children}</StyledTd>

export default LoadingCell

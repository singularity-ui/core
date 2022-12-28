import { useState } from 'react'
import { styled } from 'styled-components'

import { Accent, SortOrder } from '../../constants'
import { SortAsc } from '../../icons/SortAsc'
import { SortDesc } from '../../icons/SortDesc'

import type { TableColumnProps } from './types'

const StyledTh = styled.th<{
  grow?: number
}>`
  border-bottom: solid 2px ${p => p.theme.color.body.light};
  padding: ${p => p.theme.padding.layout.medium};
  text-align: left;
  width: ${p => (p.grow === undefined ? 'auto' : `${p.grow * 100}%`)};
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.span`
  font-weight: 500;
`

const StyledSortAsc = styled(SortAsc)`
  cursor: pointer;
  user-select: none;
`
const StyledSortDesc = styled(SortDesc)`
  cursor: pointer;
  user-select: none;
`

const SortAscOff = styled(StyledSortAsc)`
  opacity: 0.25;

  :hover {
    opacity: 1;
  }
`

export type HeadProps = {
  column: TableColumnProps
  onSort: (key: string, isDesc: boolean) => void
  sortOrder?: SortOrder
}
export function Head({ column, onSort, sortOrder }: HeadProps) {
  const [isHovered, setIsHovered] = useState(false)

  if (column.type === 'action' || column.type === 'boolean') {
    return <StyledTh as="td" />
  }

  const { grow, key, label } = column

  if (column.type === 'tags' || column.type === 'custom') {
    return (
      <StyledTh grow={grow}>
        <Box>
          <Label>{label}</Label>
        </Box>
      </StyledTh>
    )
  }

  const { isSortable = false } = column

  const sort = () => {
    if (!isSortable || typeof key !== 'string') {
      return
    }

    const isDesc = sortOrder !== undefined && sortOrder === SortOrder.ASC

    onSort(key, isDesc)
  }

  return (
    <StyledTh grow={grow}>
      <Box>
        <Label>{label}</Label>

        {isSortable && sortOrder === undefined && <SortAscOff onClick={sort} />}

        {isSortable && sortOrder === SortOrder.ASC && (
          <>
            {!isHovered && <StyledSortAsc accent={Accent.SECONDARY} onMouseOver={() => setIsHovered(true)} />}
            {isHovered && (
              <StyledSortDesc accent={Accent.SECONDARY} onClick={sort} onMouseLeave={() => setIsHovered(false)} />
            )}
          </>
        )}

        {isSortable && sortOrder === SortOrder.DESC && (
          <>
            {!isHovered && <StyledSortDesc accent={Accent.SECONDARY} onMouseOver={() => setIsHovered(true)} />}
            {isHovered && (
              <StyledSortAsc accent={Accent.SECONDARY} onClick={sort} onMouseLeave={() => setIsHovered(false)} />
            )}
          </>
        )}
      </Box>
    </StyledTh>
  )
}

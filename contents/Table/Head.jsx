import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { ACCENT, SORT_ORDER, SORT_ORDERS, TYPE, TYPES } from '../../common/constants'
import SortAsc from '../../icons/SortAsc'
import SortDesc from '../../icons/SortDesc'

const StyledTh = styled.th`
  border-bottom: solid 2px ${p => p.theme.color.body.light};
  padding: ${p => p.theme.padding.layout.medium};
  text-align: left;
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

const Head = ({ dataKey, isSortable, label, onSort, sortOrder, type }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  if (type === TYPE.ACTION) {
    return <StyledTh as="td" />
  }

  return (
    <StyledTh>
      <Box>
        <Label>{label}</Label>
        {isSortable && sortOrder === null && <SortAscOff onClick={() => onSort(dataKey, false)} />}
        {isSortable && sortOrder === SORT_ORDER.ASC && (
          <>
            {!isHovered && <StyledSortAsc accent={ACCENT.SECONDARY} onMouseOver={() => setIsHovered(true)} />}
            {isHovered && (
              <StyledSortDesc
                accent={ACCENT.SECONDARY}
                onClick={() => onSort(dataKey, true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            )}
          </>
        )}
        {isSortable && sortOrder === SORT_ORDER.DESC && (
          <>
            {!isHovered && <StyledSortDesc accent={ACCENT.SECONDARY} onMouseOver={() => setIsHovered(true)} />}
            {isHovered && (
              <StyledSortAsc
                accent={ACCENT.SECONDARY}
                onClick={() => onSort(dataKey, false)}
                onMouseLeave={() => setIsHovered(false)}
              />
            )}
          </>
        )}
      </Box>
    </StyledTh>
  )
}

Head.defaultProps = {
  dataKey: null,
  isSortable: false,
  label: null,
  onSort: null,
  sortOrder: null,
  type: TYPE.STRING,
}

Head.propTypes = {
  dataKey: PropTypes.string,
  isSortable: PropTypes.bool,
  label: PropTypes.string,
  onSort: PropTypes.func,
  sortOrder: PropTypes.oneOf(SORT_ORDERS),
  type: PropTypes.oneOf(TYPES),
}

export default Head

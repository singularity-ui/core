/* eslint-disable jsx-a11y/anchor-is-valid */

import PropTypes from 'prop-types'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { Button } from '../../elements/Button'

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
  user-select: none;
`

const Link = styled(Button)<{
  isSelected: boolean
}>`
  background-color: ${p => p.theme.color.secondary[p.isSelected ? 'active' : 'default']};
  border: solid 1px ${p => p.theme.color.secondary.default};
  border-radius: 0;
  min-width: calc(2.5rem + 2px);

  :disabled {
    opacity: 0.65;
  }

  focus-visible {
    background-color: ${p => p.theme.color.a11n.focus.background} !important;
    border: solid 1px ${p => p.theme.color.a11n.focus.background} !important;
    color: ${p => p.theme.color.a11n.focus.foreground} !important;
  }

  :hover {
    background-color: ${p => p.theme.color.secondary.active};
  }
`

type PaginationProps = {
  onChange: (pageIndex: number) => void
  pageCount: number
  pageIndex: number
}
export const Pagination: FunctionComponent<PaginationProps> = ({ onChange, pageCount, pageIndex }) => (
  <Box>
    {new Array(pageCount).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Link key={index} disabled={index === pageIndex} isSelected={index === pageIndex} onClick={() => onChange(index)}>
        {index + 1}
      </Link>
    ))}
  </Box>
)

Pagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
}

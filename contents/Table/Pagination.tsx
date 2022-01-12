/* eslint-disable jsx-a11y/anchor-is-valid */

import BetterPropTypes from 'better-prop-types'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { Button } from '../../elements/Button'
import MaterialChevronLeft from '../../icons/material/MaterialChevronLeft'
import MaterialChevronRight from '../../icons/material/MaterialChevronRight'

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
  user-select: none;
`

const Link = styled(Button)<{
  isSeparator: boolean
}>`
  align-items: center;
  background-color: ${p => p.theme.color.secondary.default};
  border: solid 1px ${p => p.theme.color.secondary.default};
  border-radius: 0;
  display: flex;
  justify-content: center;
  padding-left: 0;
  padding-right: 0;
  min-width: calc(2.5rem + 2px);

  :disabled {
    cursor: default;
    opacity: ${p => (p.isSeparator ? 0.35 : 0.65)};
  }

  focus-visible {
    background-color: ${p => p.theme.color.a11n.focus.background} !important;
    border: solid 1px ${p => p.theme.color.a11n.focus.background} !important;
    color: ${p => p.theme.color.a11n.focus.foreground} !important;
  }

  :hover:not(:disabled) {
    background-color: ${p => p.theme.color.secondary.active};
  }

  > svg {
    fill: ${p => p.theme.color.body.white};
    margin-top: -1px;
  }
`

type PaginationProps = {
  onChange: (pageIndex: number) => void
  pageCount: number
  pageIndex: number
}
export const Pagination: FunctionComponent<PaginationProps> = ({ onChange, pageCount, pageIndex }) => {
  const links: Array<{
    index: number
    isDisabled: boolean
    isSeparator: boolean
    key: string
    label: string
  }> = []

  if (pageCount <= 7) {
    const arrayholder = new Array(pageCount).fill(null).map((_, index) => ({
      index,
      isDisabled: index === pageIndex,
      isSeparator: false,
      key: `page-${index}`,
      label: String(index + 1),
    }))

    links.push(...arrayholder)
  } else if (pageIndex <= 1) {
    // First and second page

    const arrayholder = new Array(5).fill(null).map((_, _index) => {
      const index = pageIndex === 0 ? _index + pageIndex : _index + pageIndex - 1

      return {
        index,
        isDisabled: index === pageIndex,
        isSeparator: false,
        key: `page-${index}`,
        label: String(index + 1),
      }
    })

    links.push(...arrayholder)

    links.push({
      index: Infinity,
      isDisabled: true,
      isSeparator: true,
      key: `separator-end`,
      label: '…',
    })
    links.push({
      index: pageCount - 1,
      isDisabled: false,
      isSeparator: false,
      key: `page-${pageCount - 1}`,
      label: String(pageCount),
    })
  } else if (pageIndex >= pageCount - 2) {
    // Second to last and last page

    links.push({
      index: 0,
      isDisabled: false,
      isSeparator: false,
      key: `page-0`,
      label: '1',
    })
    links.push({
      index: Infinity,
      isDisabled: true,
      isSeparator: true,
      key: `separator-start`,
      label: '…',
    })

    const arrayholder = new Array(5).fill(null).map((_, _index) => {
      const index = pageIndex === pageCount - 1 ? pageIndex + _index - 4 : pageIndex + _index - 3

      return {
        index,
        isDisabled: index === pageIndex,
        isSeparator: false,
        key: `page-${index}`,
        label: String(index + 1),
      }
    })

    links.push(...arrayholder)
  } else {
    links.push({
      index: 0,
      isDisabled: false,
      isSeparator: false,
      key: `page-0`,
      label: '1',
    })
    links.push({
      index: Infinity,
      isDisabled: true,
      isSeparator: true,
      key: `separator-start`,
      label: '…',
    })

    const arrayholder = new Array(3).fill(null).map((_, _index) => {
      const index = pageIndex + _index - 1

      return {
        index,
        isDisabled: index === pageIndex,
        isSeparator: false,
        key: `page-${index}`,
        label: String(index + 1),
      }
    })

    links.push(...arrayholder)

    links.push({
      index: Infinity,
      isDisabled: true,
      isSeparator: true,
      key: `separator-end`,
      label: '…',
    })
    links.push({
      index: pageCount - 1,
      isDisabled: false,
      isSeparator: false,
      key: `page-${pageCount - 1}`,
      label: String(pageCount),
    })
  }

  return (
    <Box>
      <Link key="page-previous" disabled={pageIndex === 0} isSeparator={false} onClick={() => onChange(pageIndex - 1)}>
        <MaterialChevronLeft />
      </Link>

      {links.map(({ index, isDisabled, isSeparator, key, label }) => (
        <Link key={key} disabled={isDisabled} isSeparator={isSeparator} onClick={() => onChange(index)}>
          {label}
        </Link>
      ))}

      <Link
        key="page-next"
        disabled={pageIndex === pageCount - 1}
        isSeparator={false}
        onClick={() => onChange(pageIndex + 1)}
      >
        <MaterialChevronRight />
      </Link>
    </Box>
  )
}

Pagination.propTypes = {
  onChange: BetterPropTypes.func.isRequired,
  pageCount: BetterPropTypes.number.isRequired,
  pageIndex: BetterPropTypes.number.isRequired,
}

import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'
import styled from 'styled-components'

import { SORT_ORDER } from '../../common/constants'
import generateKeyFromValue from '../../helpers/generateKeyFromValue'
import Head from './Head'
import LoadingCell from './LoadingCell'
import NoDataCell from './NoDataCell'
import Pagination from './Pagination'
import Row from './Row'
import { ColumnShape } from './shapes'

const Box = styled.div`
  table {
    border-spacing: 0;
    width: 100%;
  }

  table > tbody > tr:nth-child(even) {
    background-color: ${p => p.theme.color.list.even};
  }
  table > tbody > tr:nth-child(odd) {
    background-color: ${p => p.theme.color.list.odd};
  }

  table > tbody > tr:last-child > td {
    border-bottom: solid 2px ${p => p.theme.color.body.light};
  }
`

const getSortOrder = isDesc => (isDesc ? SORT_ORDER.DESC : SORT_ORDER.ASC)
const dottedPath = key => R.path(key.split('.'))
const sort = (data, keyDottedPath, isDesc) => {
  if (keyDottedPath === null) {
    return data
  }

  const sortingComparator = isDesc ? R.descend(dottedPath(keyDottedPath)) : R.ascend(dottedPath(keyDottedPath))

  return R.sort(sortingComparator)(data)
}

const Table = React.forwardRef(
  ({ columns, data, defaultSortedKey, defaultSortedKeyIsDesc, isLoading, perPage, ...props }, ref) => {
    const [pageIndex, setPageIndex] = React.useState(0)
    const [sortedData, setSortedData] = React.useState(sort(data, defaultSortedKey, defaultSortedKeyIsDesc))
    const [sortedKey, setSortedKey] = React.useState(defaultSortedKey)
    const [sortedKeyOrder, setSortedKeyOrder] = React.useState(getSortOrder(defaultSortedKeyIsDesc))

    const isEmpty = data.length === 0
    const pageCount = Math.ceil(data.length / perPage)
    const isSinglePaged = pageCount <= 1

    const startIndex = pageIndex * perPage
    const enIndex = startIndex + perPage
    const visibleData = isLoading || isEmpty ? [] : sortedData.slice(startIndex, enIndex)

    const sortDataByKey = (key, isDesc) => {
      setSortedKey(key)
      setSortedKeyOrder(getSortOrder(isDesc))
      setSortedData(sort(data, key, isDesc))
    }

    React.useEffect(() => {
      if (sortedKey === null) {
        return
      }

      setSortedData(sort(data, sortedKey, sortedKeyOrder === SORT_ORDER.DESC))
    }, [data])

    React.useEffect(() => {
      if (defaultSortedKey === null) {
        return
      }

      sortDataByKey(defaultSortedKey, defaultSortedKeyIsDesc)
    }, [defaultSortedKey, defaultSortedKeyIsDesc])

    return (
      <Box>
        <table ref={ref} {...props}>
          <thead>
            <tr>
              {columns.map(({ key: dataKey, ...columnProps }, index) => (
                <Head
                  key={String(index)}
                  dataKey={dataKey}
                  onSort={sortDataByKey}
                  sortOrder={dataKey === sortedKey ? sortedKeyOrder : null}
                  {...columnProps}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <LoadingCell colSpan={columns.length}>Loading…</LoadingCell>
              </tr>
            )}

            {!isLoading && isEmpty && (
              <tr>
                <NoDataCell colSpan={columns.length}>No data.</NoDataCell>
              </tr>
            )}

            {!isLoading &&
              !isEmpty &&
              visibleData.map(dataRow => <Row key={generateKeyFromValue(dataRow)} columns={columns} data={dataRow} />)}
          </tbody>
        </table>

        {!isSinglePaged && (
          <Pagination
            initialPage={pageIndex}
            onPageChange={({ selected }) => setPageIndex(selected)}
            pageCount={pageCount}
            pageRangeDisplayed={3}
          />
        )}
      </Box>
    )
  },
)

Table.displayName = 'Table'

Table.defaultProps = {
  data: [],
  defaultSortedKey: null,
  defaultSortedKeyIsDesc: false,
  isLoading: false,
  perPage: 10,
}

Table.propTypes = {
  columns: PropTypes.arrayOf(ColumnShape).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  defaultSortedKey: PropTypes.string,
  defaultSortedKeyIsDesc: PropTypes.bool,
  isLoading: PropTypes.bool,
  perPage: PropTypes.number,
}

export default Table

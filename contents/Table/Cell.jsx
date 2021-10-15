import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'
import { CheckCircle, XCircle } from 'react-feather'
import styled from 'styled-components'

import { TYPE } from '../../common/constants'
import { ColumnShape } from './shapes'

const ERROR_SCOPE = '🌌 @singularity/core/Table:'

const StyledTd = styled.td`
  max-width: 0;
  overflow: hidden;
  padding: ${p => p.theme.padding.layout.medium};
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const StyledTdId = styled(StyledTd)`
  font-family: monospace;
  font-size: 1rem;
  width: 2rem;
`

const StyledTdBoolean = styled(StyledTd)`
  line-height: 0;
  max-width: none;
  width: 3.5rem;

  svg {
    color: ${p => p.theme.color[p.value ? 'success' : 'danger'].active};
    height: 1.5rem !important;
    max-width: 1.5rem !important;
  }
`

const StyledTdAction = styled(StyledTdBoolean)`
  cursor: pointer;

  :hover {
    background-color: ${p => p.theme.color[p.accent].active};
  }

  svg {
    color: ${p => p.theme.color[p.accent].default};
  }
  :hover svg {
    color: white;
  }
`

const path = (key, obj) => R.path(key.split('.'), obj)

const Cell = ({ column, data }) => {
  const { accent, action, Icon, key, label, type } = column

  if (label === undefined) {
    console.error(ERROR_SCOPE, `Each column must have a {label} property.`)

    return <StyledTd />
  }

  if (type === TYPE.ACTION) {
    if (data.id === undefined) {
      console.error(
        ERROR_SCOPE,
        `You must have an "id" property in your {data} collection in order to use {action} in columns.`,
      )

      return <StyledTd />
    }

    if (Icon === undefined) {
      console.error(
        ERROR_SCOPE,
        `You must set the {accent} property in "${label}" column to use an {action} in this column.`,
      )

      return <StyledTd />
    }

    if (Icon === undefined) {
      console.error(
        ERROR_SCOPE,
        `You must set the {Icon} property in "${label}" column to use an {action} in this column.`,
      )

      return <StyledTd />
    }

    return (
      <StyledTdAction accent={accent} onClick={() => action(data.id)}>
        <Icon />
      </StyledTdAction>
    )
  }

  const value = path(key, data)

  if (type === TYPE.BOOLEAN) {
    return <StyledTdBoolean value={value}>{value ? <CheckCircle /> : <XCircle />}</StyledTdBoolean>
  }

  if (type === TYPE.ID) {
    return <StyledTdId>{value}</StyledTdId>
  }

  // return <StyledTd />
  return <StyledTd>{value}</StyledTd>
}

Cell.propTypes = {
  column: ColumnShape.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
}

export default Cell

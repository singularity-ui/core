import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { TYPE } from '../../common/constants'
import { ColumnShape } from './shapes'

const ERROR_SCOPE = '🌌 @singularity/core/Table:'

const StyledTd = styled.td`
  overflow: hidden;
  padding: ${p => p.theme.padding.layout.medium};
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const StyledTdId = styled(StyledTd)`
  font-family: monospace;
  font-size: 1rem;
  max-width: 2rem;
`

const StyledTdAction = styled(StyledTd)`
  cursor: pointer;
  line-height: 0;
  width: 3.5rem;

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

const StyledIcon = styled.div`
  height: 1.5rem !important;
  max-width: 1.5rem !important;
`

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
        <StyledIcon as={Icon} />
      </StyledTdAction>
    )
  }

  if (type === TYPE.ID) {
    return <StyledTdId>{data[key]}</StyledTdId>
  }

  // return <StyledTd />
  return <StyledTd>{data[key]}</StyledTd>
}

Cell.propTypes = {
  column: ColumnShape.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
}

export default Cell

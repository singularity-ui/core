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

  :focus-visible {
    background-color: ${p => p.theme.color.a11n.focus.background} !important;
  }
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

const StyledTdToggle = styled(StyledTdBoolean)`
  cursor: pointer;
`

const path = (key, obj) => R.path(key.split('.'), obj)

const Cell = ({ column, data }) => {
  const { accent, action, Icon, IconOff, IconOn, key, label, labelOff, labelOn, type } = column

  if (label === undefined && (labelOff === undefined || labelOn === undefined)) {
    console.error(ERROR_SCOPE, `Each column must have a {label} property.`)

    return <StyledTd />
  }

  if (type === TYPE.ACTION) {
    if (data.id === undefined) {
      console.error(ERROR_SCOPE, `You must have an "id" property in your {data} collection to use a {type}="action".`)

      return <StyledTd />
    }

    if (accent === undefined) {
      console.error(ERROR_SCOPE, `You must set the {accent} property in "${label}" column to use a {type}="action".`)

      return <StyledTd />
    }

    if (Icon === undefined) {
      console.error(ERROR_SCOPE, `You must set the {Icon} property in "${label}" column to use a {type}="action".`)

      return <StyledTd />
    }

    return (
      <StyledTdAction accent={accent} aria-label={label} onClick={() => action(data.id)} role="button" tabIndex="0">
        <Icon />
      </StyledTdAction>
    )
  }

  const value = path(key, data)

  if (type === TYPE.TOGGLE) {
    if (data.id === undefined) {
      console.error(ERROR_SCOPE, `You must have an "id" property in your {data} collection to use a {type}="toggle".`)

      return <StyledTd />
    }

    if (IconOff === undefined) {
      console.error(ERROR_SCOPE, `You must set the {IconOff} property in "${label}" column to use a {type}="action".`)

      return <StyledTd />
    }

    if (IconOn === undefined) {
      console.error(ERROR_SCOPE, `You must set the {IconOff} property in "${label}" column to use a {type}="action".`)

      return <StyledTd />
    }

    return (
      <StyledTdToggle
        aria-label={value ? labelOn : labelOff}
        onClick={() => action(data.id, !value)}
        role="button"
        tabIndex="0"
      >
        {value ? <IconOn /> : <IconOff />}
      </StyledTdToggle>
    )
  }

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

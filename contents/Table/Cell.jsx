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
  padding: ${p => p.theme.padding.layout.medium};
  position: relative;
  text-align: left;

  :focus-visible {
    background-color: ${p => p.theme.color.a11n.focus.background} !important;
  }
  :focus-visible svg {
    color: ${p => p.theme.color.a11n.focus.foreground} !important;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const StyledTdId = styled(StyledTd)`
  font-family: monospace;
  font-size: 1rem;
  width: 2rem;
`

const StyledTdIcon = styled(StyledTd)`
  line-height: 0;
  max-width: none;
  width: 3.5rem;

  svg {
    height: 1.5rem !important;
    max-width: 1.5rem !important;
  }

  span {
    background-color: ${p => p.theme.color.body.light};
    box-shadow: ${p => p.theme.shadow.small};
    font-size: 80%;
    font-weight: 500;
    white-space: nowrap;
    color: ${p => p.theme.color.body.white};
    left: 50%;
    opacity: 0;
    padding: ${p => p.theme.padding.input.large};
    pointer-events: none;
    position: absolute;
    bottom: -1.25rem;
    transition: all 0.5s;
    transform: translateX(-50%);
    user-select: none;
    z-index: 99999;
  }
  span:before {
    content: '';
    border-left: 0.375rem solid transparent;
    border-right: 0.375rem solid transparent;
    border-bottom: 0.375rem solid ${p => p.theme.color.body.light};
    left: 50%;
    position: absolute;
    top: -0.375rem;
    transform: translateX(-50%);
  }
  :hover > span {
    opacity: 1;
  }
`

const StyledTdBoolean = styled(StyledTdIcon)`
  svg {
    color: ${p => p.theme.color[p.value ? 'success' : 'danger'].active};
  }
`

const StyledTdAction = styled(StyledTdIcon)`
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

const StyledTdToggle = styled(StyledTdIcon)`
  cursor: pointer;
`

const isId = maybeId => ['number', 'string'].includes(typeof maybeId)
const isMongoObjectId = R.pathEq(['constructor', 'name'], 'ObjectId')
const path = (key, obj) => R.path(key.split('.'), obj)

const getId = data => {
  const maybeId = data.id || data._id

  if (isMongoObjectId(maybeId)) {
    return maybeId.toString()
  }

  return maybeId
}

const Cell = ({ column, data }) => {
  const { accent, action, Icon, IconOff, IconOn, key, label, labelOff, labelOn, type } = column
  const maybeId = getId(data)
  const withTooltip = Boolean(column.withTooltip)

  if (label === undefined && (labelOff === undefined || labelOn === undefined)) {
    console.error(ERROR_SCOPE, `Each column must have a {label} property.`)

    return <StyledTd />
  }

  if (type === TYPE.ACTION) {
    if (!isId(maybeId)) {
      console.error(
        ERROR_SCOPE,
        `You must have an "id" or "_id" property in your {data} collection to use a {type}="action".`,
      )

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
      <StyledTdAction accent={accent} aria-label={label} onClick={() => action(maybeId)} role="button" tabIndex="0">
        {withTooltip && <span>{label}</span>}

        <Icon />
      </StyledTdAction>
    )
  }

  const value = path(key, data)

  if (type === TYPE.TOGGLE) {
    if (!isId(maybeId)) {
      console.error(
        ERROR_SCOPE,
        `You must have an "id" or "_id" property in your {data} collection to use a {type}="toggle".`,
      )

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

    const toggleLabel = value ? labelOn : labelOff

    return (
      <StyledTdToggle aria-label={toggleLabel} onClick={() => action(maybeId, !value)} role="button" tabIndex="0">
        {withTooltip && <span>{toggleLabel}</span>}

        {value ? <IconOn /> : <IconOff />}
      </StyledTdToggle>
    )
  }

  if (type === TYPE.BOOLEAN) {
    return (
      <StyledTdBoolean value={value}>
        {withTooltip && <span>{label}</span>}

        {value ? <CheckCircle /> : <XCircle />}
      </StyledTdBoolean>
    )
  }

  if (type === TYPE.ID) {
    return <StyledTdId>{value}</StyledTdId>
  }

  // return <StyledTd />
  return (
    <StyledTd>
      <p>{value}</p>
    </StyledTd>
  )
}

Cell.propTypes = {
  column: ColumnShape.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
}

export default Cell

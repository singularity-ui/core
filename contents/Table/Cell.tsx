import BetterPropTypes from 'better-prop-types'
import * as R from 'ramda'
import React, { FunctionComponent } from 'react'
import { CheckCircle, XCircle } from 'react-feather'
import styled from 'styled-components'

import { ColumnShape } from './shapes'
import { TableActionColumn, TableBooleanColumn, TableColumn } from './types'

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

const StyledTdBoolean = styled(StyledTdIcon)<{
  value: any
}>`
  svg {
    color: ${p => p.theme.color[p.value ? 'success' : 'danger'].active};
  }
`

const StyledTdAction = styled(StyledTdIcon)<{
  accent: Common.Accent
}>`
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

const path = (key: string, data: Common.CollectionItem) => R.path(key.split('.'), data) as any

const getId = (data: Common.CollectionItem): any => {
  const maybeId = data.id || data._id

  if (isMongoObjectId(maybeId)) {
    return maybeId.toString()
  }

  return maybeId
}

type ActionCellProps = {
  column: TableActionColumn
  data: Common.CollectionItem
}
export const ActionCell: FunctionComponent<ActionCellProps> = ({ column, data }) => {
  const { accent, action, Icon, label, withTooltip = false } = column
  const id = getId(data)

  if (label === undefined) {
    console.warn(ERROR_SCOPE, `Each column must have a {label} property.`)

    return <StyledTd />
  }

  if (!isId(id)) {
    console.warn(
      ERROR_SCOPE,
      `You must have an "id" or "_id" property in your {data} collection to use a {type}="action".`,
    )

    return <StyledTd />
  }

  if (accent === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {accent} property in "${label}" column to use a {type}="action".`)

    return <StyledTd />
  }

  if (Icon === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {Icon} property in "${label}" column to use a {type}="action".`)

    return <StyledTd />
  }

  const handleAction = () => {
    action(id)
  }

  return (
    <StyledTdAction accent={accent} aria-label={label} onClick={handleAction} role="button" tabIndex={0}>
      {withTooltip && <span>{label}</span>}

      <Icon />
    </StyledTdAction>
  )
}

type BooleanCellProps = {
  column: TableBooleanColumn
  data: Common.CollectionItem
}
export const BooleanCell: FunctionComponent<BooleanCellProps> = ({ column, data }) => {
  const { action, IconOff, IconOn, key, label, labelOff, labelOn, withTooltip = false } = column
  const id = getId(data)

  if (label === undefined) {
    console.warn(ERROR_SCOPE, `Each column must have a {label} property.`)

    return <StyledTd />
  }

  if (labelOff === undefined || labelOn === undefined) {
    console.warn(
      ERROR_SCOPE,
      `You must set the {labelOff} and {labelOn} properties in "${label}" column to use a {type}="boolean".`,
    )

    return <StyledTd />
  }

  if (!isId(id)) {
    console.warn(
      ERROR_SCOPE,
      `You must have an "id" or "_id" field in your {data} items to use an {action} property in "${label}" column.`,
    )

    return <StyledTd />
  }

  if (IconOff === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {IconOff} property in "${label}" column to use a {type}="action".`)

    return <StyledTd />
  }

  if (IconOn === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {IconOff} property in "${label}" column to use a {type}="action".`)

    return <StyledTd />
  }

  const value = Boolean(typeof key === 'function' ? key(data) : path(key, data))
  const toggledLabel = value ? labelOn : labelOff

  if (column.action === undefined) {
    return (
      <StyledTdBoolean value={value}>
        {withTooltip && <span>{toggledLabel}</span>}

        {value ? <CheckCircle /> : <XCircle />}
      </StyledTdBoolean>
    )
  }

  const handleAction = () => {
    if (action === undefined) {
      return
    }

    action(id, !value)
  }

  return (
    <StyledTdToggle aria-label={toggledLabel} onClick={handleAction} role="button" tabIndex={0}>
      {withTooltip && <span>{toggledLabel}</span>}

      {value ? <IconOn /> : <IconOff />}
    </StyledTdToggle>
  )
}

type CellProps = {
  column: TableColumn
  data: Common.CollectionItem
}
export const Cell: FunctionComponent<CellProps> = ({ column, data }) => {
  if (column.type === 'action') {
    return <ActionCell column={column} data={data} />
  }

  if (column.type === 'boolean') {
    return <BooleanCell column={column} data={data} />
  }

  const { key, label, type } = column

  if (label === undefined) {
    console.warn(ERROR_SCOPE, `Each column must have a label.`)

    return <StyledTd />
  }

  if (key === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {key} property in "${label}" column.`)

    return <StyledTd />
  }

  const value = String(typeof key === 'function' ? key(data) : path(key, data))

  if (type === 'id') {
    return <StyledTdId>{value}</StyledTdId>
  }

  return <StyledTd>{value}</StyledTd>
}

Cell.propTypes = {
  column: ColumnShape.isRequired,
  data: BetterPropTypes.arrayOf(BetterPropTypes.any).isRequired,
}

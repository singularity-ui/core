import BetterPropTypes from 'better-prop-types'
import * as R from 'ramda'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { ColumnPropType } from './shapes'
import { TableActionColumnProps, TableBooleanColumnProps, TableColumnProps } from './types'

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

const StyledTdAction = styled(StyledTdIcon)<{
  accent: Common.Accent
}>`
  cursor: pointer;

  :hover {
    background-color: ${p => p.theme.color[p.accent].active};
  }

  svg {
    fill: ${p => p.theme.color[p.accent].default};
  }
  :hover svg {
    fill: white;
  }
`

const StyledTdBoolean = styled(StyledTdIcon)<{
  value: any
}>`
  svg {
    fill: ${p => p.theme.color[p.value ? 'success' : 'danger'].active};
  }
`

const StyledTdId = styled(StyledTd)`
  font-family: monospace;
  font-size: 1rem;
  width: 2rem;
`

const StyledTdToggle = styled(StyledTdIcon)`
  cursor: pointer;
`

const StyledTdValue = styled(StyledTd)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const isId = (maybeId: any) => ['number', 'string'].includes(typeof maybeId)
const isMongoObjectId = R.pathEq(['constructor', 'name'], 'ObjectId')

const path = (key: string, data: Common.CollectionItem) => R.path(key.split('.'), data) as any

const getId = (data: Common.CollectionItem): any => {
  const maybeId = data.id !== undefined ? data.id : data._id

  if (isMongoObjectId(maybeId)) {
    return maybeId.toString()
  }

  return maybeId
}

type ActionCellProps = {
  column: TableActionColumnProps
  dataRow: Common.CollectionItem
}
export const ActionCell: FunctionComponent<ActionCellProps> = ({ column, dataRow }) => {
  const { accent, action, Icon, label, withTooltip = false } = column
  const id = getId(dataRow)

  if (label === undefined) {
    console.warn(ERROR_SCOPE, `Each column must have a {label} property.`)

    return <StyledTd />
  }

  if (!isId(id)) {
    console.warn(
      ERROR_SCOPE,
      `You must have an "id" or "_id" property in your {data} collection ` +
        `to use a {type}="action" in "${label}" column.`,
    )

    return <StyledTd />
  }

  if (accent === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {accent} property to use a {type}="action" in "${label}" column.`)

    return <StyledTd />
  }

  if (Icon === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {Icon} property to use a {type}="action" in "${label}" column.`)

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
  column: TableBooleanColumnProps
  dataRow: Common.CollectionItem
}
export const BooleanCell: FunctionComponent<BooleanCellProps> = ({ column, dataRow }) => {
  const { action, IconOff, IconOn, key, label, labelOff, labelOn, withTooltip = false } = column
  const maybeId = getId(dataRow)

  if (label === undefined) {
    console.warn(ERROR_SCOPE, `Each column must have a {label} property.`)

    return <StyledTd />
  }

  if (labelOff === undefined || labelOn === undefined) {
    console.warn(
      ERROR_SCOPE,
      `You must set the {labelOff} and {labelOn} properties to use a {type}="boolean" in "${label}" column.`,
    )

    return <StyledTd />
  }

  if (!isId(maybeId)) {
    console.warn(
      ERROR_SCOPE,
      `You must have an "id" or "_id" field in your {data} items to use an {action} property in "${label}" column.`,
    )

    return <StyledTd />
  }

  if (IconOff === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {IconOff} property to use a {type}="action" in "${label}" column.`)

    return <StyledTd />
  }

  if (IconOn === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {IconOff} property to use a {type}="action" in "${label}" column.`)

    return <StyledTd />
  }

  const value = Boolean(path(key, dataRow))
  const toggledLabel = value ? labelOn : labelOff

  if (action === undefined) {
    return (
      <StyledTdBoolean value={value}>
        {withTooltip && <span>{toggledLabel}</span>}

        {value ? <IconOn /> : <IconOff />}
      </StyledTdBoolean>
    )
  }

  const handleAction = () => {
    action(maybeId, !value)
  }

  return (
    <StyledTdToggle aria-label={toggledLabel} onClick={handleAction} role="button" tabIndex={0}>
      {withTooltip && <span>{toggledLabel}</span>}

      {value ? <IconOn /> : <IconOff />}
    </StyledTdToggle>
  )
}

type CellProps = {
  column: TableColumnProps
  dataRow: Common.CollectionItem
}
export const Cell: FunctionComponent<CellProps> = ({ column, dataRow }) => {
  if (column.type === 'action') {
    return <ActionCell column={column} dataRow={dataRow} />
  }

  if (column.type === 'boolean') {
    return <BooleanCell column={column} dataRow={dataRow} />
  }

  const { key, label, transform, type } = column

  if (label === undefined) {
    console.warn(ERROR_SCOPE, `Each column must have a label.`)

    return <StyledTd />
  }

  if (key === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {key} property in "${label}" column.`)

    return <StyledTd />
  }

  const value = transform !== undefined ? transform(dataRow) : path(key, dataRow)

  if (type === 'id') {
    return <StyledTdId>{value}</StyledTdId>
  }

  return <StyledTdValue>{value}</StyledTdValue>
}

Cell.propTypes = {
  column: ColumnPropType.isRequired,
  dataRow: BetterPropTypes.any.isRequired,
}

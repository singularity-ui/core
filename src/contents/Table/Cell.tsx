import * as R from 'ramda'
import { styled } from 'styled-components'

import { Tag } from '../../elements/Tag'

import type { Accent } from '../../constants'
import type { CollectionItem } from '../../types'
import type {
  TableActionColumnProps,
  TableBooleanColumnProps,
  TableColumnProps,
  TableCustomColumnProps,
  TableTagsColumnProps,
  TableValueColumnProps,
} from './types'

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
    transform: translateX(-90%);
    user-select: none;
    z-index: 99999;
  }
  span:before {
    content: '';
    border-left: 0.375rem solid transparent;
    border-right: 0.375rem solid transparent;
    border-bottom: 0.375rem solid ${p => p.theme.color.body.light};
    right: 0.5rem;
    position: absolute;
    top: -0.375rem;
    transform: translateX(-50%);
  }
  :hover > span {
    opacity: 1;
  }
`

const StyledTdAction = styled(StyledTdIcon)<{
  accent: Accent
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

const path = (key: string, data: CollectionItem) => R.path(key.split('.'), data) as any

const getId = (data: CollectionItem): any => {
  const maybeId = data.id !== undefined ? data.id : data._id

  if (isMongoObjectId(maybeId)) {
    return maybeId.toString()
  }

  return maybeId
}

type ActionCellProps = {
  column: TableActionColumnProps
  dataRow: CollectionItem
}
function ActionCell({ column, dataRow }: ActionCellProps) {
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
  dataRow: CollectionItem
}
function BooleanCell({ column, dataRow }: BooleanCellProps) {
  const { action, IconOff, IconOn, key, label, labelOff, labelOn, transform, withTooltip = false } = column
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

  const value = Boolean(transform !== undefined ? transform(dataRow) : path(key, dataRow))
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

type TagsCellProps = {
  column: TableTagsColumnProps
  dataRow: CollectionItem
}
function TagsCell({ column, dataRow }: TagsCellProps) {
  const { key, label, transform } = column

  if (label === undefined) {
    console.warn(ERROR_SCOPE, `Each column must have a label.`)

    return <StyledTd />
  }

  if (key === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {key} property in "${label}" column.`)

    return <StyledTd />
  }

  const valueOrValues = transform !== undefined ? transform(dataRow) : path(key, dataRow)
  const values = Array.isArray(valueOrValues) ? valueOrValues : [valueOrValues]

  return (
    <StyledTdValue>
      {values.map((value: any) => (
        <Tag key={String(value)}>{value}</Tag>
      ))}
    </StyledTdValue>
  )
}

type CustomCellProps = {
  column: TableCustomColumnProps
  dataRow: CollectionItem
}
function CustomCell({ column, dataRow }: CustomCellProps) {
  const { key, label, render: CustomComponent } = column

  if (label === undefined) {
    console.warn(ERROR_SCOPE, `Each column must have a label.`)

    return <StyledTd />
  }

  if (key === undefined) {
    console.warn(ERROR_SCOPE, `You must set the {key} property in "${label}" column.`)

    return <StyledTd />
  }

  const value = path(key, dataRow)

  return (
    <StyledTd>
      <CustomComponent dataRow={dataRow} value={value} />
    </StyledTd>
  )
}

type ValueCellProps = {
  column: TableValueColumnProps
  dataRow: CollectionItem
}
function ValueCell({ column, dataRow }: ValueCellProps) {
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
    return <StyledTdId title={value}>{value}</StyledTdId>
  }

  return <StyledTdValue title={value}>{value}</StyledTdValue>
}

type CellProps = {
  column: TableColumnProps
  dataRow: CollectionItem
}
export function Cell({ column, dataRow }: CellProps) {
  if (column.type === 'action') {
    return <ActionCell column={column} dataRow={dataRow} />
  }

  if (column.type === 'boolean') {
    return <BooleanCell column={column} dataRow={dataRow} />
  }

  if (column.type === 'tags') {
    return <TagsCell column={column} dataRow={dataRow} />
  }

  if (column.type === 'custom') {
    return <CustomCell column={column} dataRow={dataRow} />
  }

  return <ValueCell column={column} dataRow={dataRow} />
}

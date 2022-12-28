import { forwardRef } from 'react'
import ReactSelect from 'react-select'
import ReactSelectAsync from 'react-select/async'
import { styled } from 'styled-components'

import { Size } from '../constants'
import { Error, Helper, Label } from './shared'

import type { Theme } from '../types'
import type { ForwardedRef } from 'react'
import type { GroupBase } from 'react-select'
import type { AsyncProps } from 'react-select/async'
import type { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager'

const StyledSelect = styled(ReactSelect)<{
  hasError: boolean
  size: Size
}>`
  .Select__control {
    background-color: ${p => (p.theme as unknown as Theme).color.body.white};
    border: solid 1px
      ${p =>
        p.hasError
          ? (p.theme as unknown as Theme).color.danger.default
          : (p.theme as unknown as Theme).color.secondary.default};
    border-radius: ${p => (p.theme as unknown as Theme).appearance.borderRadius[p.size]};
    font-family: inherit;
    font-size: ${p => (p.theme as unknown as Theme).typography.size[p.size] * 100}%;
    font-weight: 400;
    min-height: auto;
    transition-delay: 0s, 0s, 0s, 0s;
    transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
    transition-property: color, background-color, border-color, box-shadow;
    transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;

    :disabled {
      opacity: 0.65;
    }

    :hover {
      border: solid 1px
        ${p =>
          p.hasError
            ? (p.theme as unknown as Theme).color.danger.active
            : (p.theme as unknown as Theme).color.secondary.active};
    }

    &--is-focused {
      box-shadow: 0 0 0 1px
        ${p =>
          p.hasError
            ? (p.theme as unknown as Theme).color.danger.active
            : (p.theme as unknown as Theme).color.secondary.active};
    }
  }

  .Select__value-container {
    cursor: text;
    padding: ${p => (p.theme as unknown as Theme).padding.input[p.size]};
  }
  .Select__placeholder {
    color: ${p => (p.theme as unknown as Theme).color.body.light};
    margin: 0;
  }

  .Select__multi-value {
    background-color: ${p => (p.theme as unknown as Theme).color.primary.background};
    border-radius: ${p => (p.theme as unknown as Theme).appearance.borderRadius[p.size]};
    margin: 0 ${p => (p.theme as unknown as Theme).padding.input[p.size]} 0 0;
  }
  .Select__multi-value__label {
    font-size: 75%;
    font-weight: 500;
    line-height: 1.5;
    padding-left: 0.5rem;
  }
  .Select__multi-value__remove {
    border-radius: 0 ${p => (p.theme as unknown as Theme).appearance.borderRadius[p.size]}
      ${p => (p.theme as unknown as Theme).appearance.borderRadius[p.size]} 0;
    cursor: pointer;

    :hover {
      background-color: ${p => (p.theme as unknown as Theme).color.primary.active};
      color: ${p => (p.theme as unknown as Theme).color.body.white};
    }
  }

  .Select__input-container {
    margin: 0;
    padding: 0;
  }

  .Select__indicators {
    cursor: pointer;
  }
  .Select__indicator-separator {
    margin: ${p => (p.theme as unknown as Theme).padding.input[p.size]} 0;
  }
  .Select__indicator {
    padding: ${p => (p.theme as unknown as Theme).padding.input[p.size]};
  }
  .Select__indicator > svg {
    color: ${p => (p.theme as unknown as Theme).color.body.light};
    height: calc(1.5rem * ${p => (p.theme as unknown as Theme).typography.size[p.size]});
    width: calc(1.5rem * ${p => (p.theme as unknown as Theme).typography.size[p.size]});
  }
` as any

export type SelectOption<Value = string> = Readonly<{
  label: string
  value: Value
}>

type SelectSyncProps<Option> = StateManagerProps<Option, boolean, GroupBase<Option>> & {
  className?: string
  error?: string
  helper?: string
  isAsync?: false
  label?: string
  options?: Option[]
  size?: Size
}
type SelectAsyncProps<Option> = AsyncProps<Option, boolean, GroupBase<Option>> & {
  className?: string
  error?: string
  helper?: string
  isAsync: true
  label?: string
  options?: Option[]
  size?: Size
}

export type SelectProps<Option = SelectOption> = SelectSyncProps<Option> | SelectAsyncProps<Option>

function SelectWithRef(
  { className, error, helper, isAsync = false, label, size = Size.MEDIUM, ...props }: SelectProps,
  ref: ForwardedRef<any>,
) {
  const hasError = typeof error === 'string' && error.length > 0
  const id = props.id || props.name

  return (
    <div className={className}>
      {label && (
        <Label className="Label" htmlFor={id} size={size}>
          {label}
        </Label>
      )}

      <StyledSelect
        ref={ref}
        as={isAsync ? ReactSelectAsync : undefined}
        className="Select"
        classNamePrefix="Select"
        hasError={hasError}
        inputId={id}
        size={size}
        {...props}
      />

      {!error && helper && (
        <Helper className="Helper" size={size}>
          {helper}
        </Helper>
      )}

      {error && (
        <Error className="Error" size={size}>
          {error}
        </Error>
      )}
    </div>
  )
}

SelectWithRef.displayName = 'Select'

export const Select = forwardRef(SelectWithRef)

import { forwardRef } from 'react'
import { styled } from 'styled-components'

import { Size } from '../constants'
import { Error, Helper, Label } from './shared'

import type { ForwardedRef, InputHTMLAttributes } from 'react'

const StyledInput = styled.input<{
  _size: Size
  hasError: boolean
}>`
  background-color: ${p => p.theme.color.body.white};
  border: solid 1px ${p => (p.hasError ? p.theme.color.danger.default : p.theme.color.secondary.default)};
  border-radius: ${p => p.theme.appearance.borderRadius[p._size]};
  font-family: inherit;
  font-size: ${p => p.theme.typography.size[p._size] * 100}%;
  font-weight: 400;
  padding: ${p => p.theme.padding.input[p._size]};
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
  width: 100%;

  :disabled {
    opacity: 0.65;
  }

  :focus {
    box-shadow: 0 0 0 1px ${p => (p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active)};
  }

  :hover {
    border: solid 1px ${p => (p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active)};
  }
`

export type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  className?: string
  error?: string
  helper?: string
  label?: string
  size?: Size
}
function TextInputWithRef(
  { className, error, helper, label, size = Size.MEDIUM, ...props }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
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

      <StyledInput ref={ref} _size={size} className="TextInput" hasError={hasError} id={id} {...props} />

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

TextInputWithRef.displayName = 'TextInput'

export const TextInput = forwardRef(TextInputWithRef)

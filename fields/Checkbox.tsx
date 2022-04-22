import BetterPropTypes from 'better-prop-types'
import React, { ChangeEvent, ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'
import { MaterialCheckBoxOutlineBlank } from '../icons/material/MaterialCheckBoxOutlineBlank'
import { MaterialCheckBoxOutlined } from '../icons/material/MaterialCheckBoxOutlined'
import { Error, Helper } from './shared'

const StyledLabel = styled.label<{
  hasError: boolean
  size: Common.Size
}>`
  align-items: center;
  border-bottom: solid 1px transparent;
  border-top: solid 1px transparent;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: ${p => p.theme.typography.size[p.size] * 100}%;
  font-weight: 400;
  padding: ${p => p.theme.padding.layout.tiny} 0;
  user-select: none;
  width: 100%;

  :disabled {
    opacity: 0.65;
  }

  > input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }

  > svg {
    fill: ${p => (p.hasError ? p.theme.color.danger.default : p.theme.color.secondary.default)};
    margin-right: ${p => p.theme.padding.input[p.size]};
    height: ${p => p.theme.typography.size[p.size] * 1.5}rem !important;
    transition-delay: 0s, 0s, 0s, 0s;
    transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
    transition-property: color, background-color, border-color, box-shadow;
    transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
    width: ${p => p.theme.typography.size[p.size] * 1.5}rem !important;
  }
  :hover > svg {
    fill: ${p => (p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active)};
  }
`

const LabelText = styled.span<{
  isChecked: boolean
}>`
  font-weight: ${p => (p.isChecked ? 500 : 400)};
`

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  className?: string
  error?: string
  helper?: string
  label: string
  size?: Common.Size
}
export const CheckboxWithProps: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
  { className, error, helper, label, onChange, size = SIZE.MEDIUM, ...props },
  ref,
) => {
  const [isChecked, setIsChecked] = React.useState(props.checked === true || props.defaultChecked === true)

  const hasError = typeof error === 'string' && error.length > 0

  React.useEffect(() => {
    setIsChecked(props.checked === true || props.defaultChecked === true)
  }, [props.checked, props.defaultChecked])

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)

    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className={className}>
      <StyledLabel className="Checkbox" hasError={hasError} size={size}>
        <input ref={ref} onChange={handleOnChange} type="checkbox" {...props} />

        {isChecked ? <MaterialCheckBoxOutlined /> : <MaterialCheckBoxOutlineBlank />}
        <LabelText isChecked={isChecked}>{label}</LabelText>
      </StyledLabel>

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

export const Checkbox = React.forwardRef(CheckboxWithProps)

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  error: BetterPropTypes.string.isOptionalButNotNull,
  helper: BetterPropTypes.string.isOptionalButNotNull,
  label: BetterPropTypes.string.isRequired,
  size: BetterPropTypes.oneOf(SIZES).isOptionalButNotNull,
}

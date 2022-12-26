import { forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import { SIZE } from '../common/constants'
import { getLowestFontSize } from '../helpers/getLowestFontSize'
import { Error, Helper } from './shared'

import type { ChangeEvent, ForwardedRef, InputHTMLAttributes } from 'react'

const StyledLabel = styled.label<{
  isChecked: boolean
  isDisabled: boolean
  size: Common.Size
}>`
  align-items: center;
  background-color: ${p => p.theme.color.body.white};
  border: solid 1px ${p => (p.isChecked ? p.theme.color.primary.active : p.theme.color.secondary.default)};
  border-radius: ${p => p.theme.appearance.borderRadius[p.size]};
  cursor: ${p => (p.isDisabled ? 'auto' : 'pointer')};
  display: inline-flex;
  opacity: ${p => (p.isDisabled ? 0.65 : 1)};
  padding: ${p => p.theme.padding.inputBox[p.size]};
  user-select: none;

  :focus-within {
    box-shadow: 0 0 0 1px ${p => p.theme.color.primary.active};
  }

  > input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }
`

const Letter = styled.span<{
  isChecked: boolean
  size: Common.Size
}>`
  align-items: center;
  background-color: ${p => (p.isChecked ? p.theme.color.primary.active : p.theme.color.secondary.default)};
  border-radius: 0.25rem;
  color: ${p => p.theme.color.body.white};
  display: flex;
  font-size: ${p => getLowestFontSize(p.theme, p.size)};
  font-weight: 700;
  height: 1.125rem;
  justify-content: center;
  line-height: 1;
  margin-right: ${p => p.theme.padding.input[p.size]};
  width: 1.125rem;
`

const LabelText = styled.span<{
  isChecked: boolean
}>`
  font-weight: ${p => (p.isChecked ? 500 : 400)};
`

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  className?: string
  error?: string
  helper?: string
  label: string
  letter?: string
  size?: Common.Size
}
function RadioWithRef(
  { className, error, helper, label, letter, onChange, size = SIZE.MEDIUM, ...props }: RadioProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const [isChecked, setIsChecked] = useState(props.checked === true || props.defaultChecked === true)

  const isDisabled = Boolean(props.disabled)

  useEffect(() => {
    setIsChecked(props.checked === true || props.defaultChecked === true)
  }, [props.checked, props.defaultChecked])

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.disabled) {
      return
    }

    setIsChecked(event.target.checked)

    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className={className}>
      <StyledLabel className="Choice" isChecked={isChecked} isDisabled={isDisabled} size={size}>
        <input ref={ref} onChange={handleOnChange} type="radio" {...props} />

        {letter && (
          <Letter className="Letter" isChecked={isChecked} size={size}>
            {letter}
          </Letter>
        )}
        <LabelText className="LabelText" isChecked={isChecked}>
          {label}
        </LabelText>
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

RadioWithRef.displayName = 'Radio'

export const Radio = forwardRef(RadioWithRef)

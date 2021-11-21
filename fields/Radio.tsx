import BetterPropTypes from 'better-prop-types'
import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'

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
  font-size: ${p => p.theme.typography.size[p.size] * 80}%;
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

const Helper = styled.p`
  margin: 0;
  padding: ${p => p.theme.padding.layout.tiny} 0 0 0;
`

const Error = styled.p`
  color: ${p => p.theme.color.danger.default};
  font-weight: 500;
  margin: 0;
  padding: ${p => p.theme.padding.layout.tiny} 0 0 0;
`

type RadioProps = Omit<InputHTMLAttributes<any>, 'size'> & {
  className?: string
  error?: string
  helper?: string
  label?: string
  letter?: string
  size?: Common.Size
}
const RadioWithProps: ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (
  { className, error, helper, label, letter, onChange, size = SIZE.MEDIUM, ...props },
  ref,
) => {
  const [isChecked, setIsChecked] = React.useState(props.checked === true || props.defaultChecked === true)

  const isDisabled = Boolean(props.disabled)

  React.useEffect(() => {
    setIsChecked(props.checked === true || props.defaultChecked === true)
  }, [props.checked, props.defaultChecked])

  const handleOnChange = event => {
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
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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

      {!error && helper && <Helper className="Helper">{helper}</Helper>}

      {error && <Error className="Error">{error}</Error>}
    </div>
  )
}

export const Radio = React.forwardRef(RadioWithProps)

Radio.displayName = 'Radio'

Radio.propTypes = {
  error: BetterPropTypes.string.isOptionalButNotNull,
  helper: BetterPropTypes.string.isOptionalButNotNull,
  label: BetterPropTypes.string.isRequired,
  letter: BetterPropTypes.string.isOptionalButNotNull,
  size: BetterPropTypes.oneOf(SIZES).isOptionalButNotNull,
}

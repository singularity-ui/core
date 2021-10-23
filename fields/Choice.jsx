import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'

const StyledLabel = styled.label`
  align-items: center;
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

const Letter = styled.span`
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

const LabelText = styled.span`
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

const Choice = React.forwardRef(
  ({ className, error, helper, label, labelTextProps, letter, onChange, size, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(props.checked === true || props.defaultChecked === true)
    const $input = React.useRef(null)
    const $labelText = React.useRef(null)

    const isDisabled = Boolean(props.disabled)
    const hasError = error !== null

    const handleOnChange = event => {
      if (props.disabled) {
        return
      }

      setIsChecked(event.target.checked)

      if (onChange) {
        onChange(event)
      }
    }

    React.useImperativeHandle(ref, () => ({
      get input() {
        return $input.current
      },
      get labelText() {
        return $labelText.current
      },
    }))

    React.useEffect(() => {
      const _isChecked = props.checked === true || props.defaultChecked === true

      setIsChecked(_isChecked)
    }, [props.checked === true, props.defaultChecked])

    return (
      <div className={className}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <StyledLabel className="Choice" hasError={hasError} isChecked={isChecked} isDisabled={isDisabled} size={size}>
          <input ref={$input} onChange={handleOnChange} type="radio" {...props} />

          {letter && (
            <Letter className="Letter" isChecked={isChecked} size={size}>
              {letter}
            </Letter>
          )}
          <LabelText ref={$labelText} className="LabelText" isChecked={isChecked} {...labelTextProps}>
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
  },
)

Choice.displayName = 'Choice'

Choice.defaultProps = {
  error: null,
  helper: null,
  labelTextProps: {},
  letter: null,
  size: SIZE.MEDIUM,
}

Choice.propTypes = {
  error: PropTypes.string,
  helper: PropTypes.string,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  labelTextProps: PropTypes.object,
  letter: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
}

export default Choice

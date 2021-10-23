import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'

const Label = styled.label`
  display: block;
  font-size: ${p => Math.round(p.theme.typography.size[p.size] * 80)}%;
  font-weight: 500;
  padding: 0 0 ${p => p.theme.padding.layout.tiny} 0;
`

const StyledTextarea = styled.textarea`
  border: solid 1px ${p => (p.hasError ? p.theme.color.danger.default : p.theme.color.secondary.default)};
  border-radius: ${p => p.theme.appearance.borderRadius[p.size]};
  font-family: inherit;
  font-size: ${p => p.theme.typography.size[p.size] * 100}%;
  font-weight: 400;
  padding: ${p => p.theme.padding.input[p.size]};
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

const Textarea = React.forwardRef(({ className, error, helper, label, size, ...props }, ref) => {
  const hasError = typeof error === 'string' && error.length > 0

  return (
    <div className={className}>
      {label && (
        <Label className="Label" size={size}>
          {label}
        </Label>
      )}

      <StyledTextarea ref={ref} className="Textarea" hasError={hasError} size={size} {...props} />

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
})

Textarea.displayName = 'Textarea'

Textarea.defaultProps = {
  error: null,
  helper: null,
  label: null,
  size: SIZE.MEDIUM,
}

Textarea.propTypes = {
  error: PropTypes.string,
  helper: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
}

export default Textarea

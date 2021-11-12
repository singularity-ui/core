import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'

const Label = styled.label<{
  size: 'large' | 'medium' | 'small'
}>`
  display: block;
  font-size: ${p => Math.round(p.theme.typography.size[p.size] * 80)}%;
  font-weight: 500;
  padding: 0 0 ${p => p.theme.padding.layout.tiny} 0;
`

const StyledInput = styled.input<{
  hasError: boolean
  size: 'large' | 'medium' | 'small'
}>`
  background-color: ${p => (p as any).theme.color.body.white};
  border: solid 1px
    ${p => ((p as any).hasError ? (p as any).theme.color.danger.default : (p as any).theme.color.secondary.default)};
  border-radius: ${p => (p as any).theme.appearance.borderRadius[(p as any).size]};
  font-family: inherit;
  font-size: ${p => (p as any).theme.typography.size[(p as any).size] * 100}%;
  font-weight: 400;
  padding: ${p => (p as any).theme.padding.input[(p as any).size]};
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
  width: 100%;

  :disabled {
    opacity: 0.65;
  }

  :focus {
    box-shadow: 0 0 0 1px
      ${p => ((p as any).hasError ? (p as any).theme.color.danger.active : (p as any).theme.color.secondary.active)};
  }

  :hover {
    border: solid 1px
      ${p => ((p as any).hasError ? (p as any).theme.color.danger.active : (p as any).theme.color.secondary.active)};
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

export const TextInput = React.forwardRef<any, any>(({ className, error, helper, label, size, ...props }, ref) => {
  const hasError = typeof error === 'string' && error.length > 0

  return (
    <div className={className}>
      {label && (
        <Label className="Label" size={size}>
          {label}
        </Label>
      )}

      <StyledInput ref={ref} className="TextInput" hasError={hasError} size={size} {...props} />

      {!error && helper && <Helper className="Helper">{helper}</Helper>}

      {error && <Error className="Error">{error}</Error>}
    </div>
  )
})

TextInput.displayName = 'TextInput'

TextInput.defaultProps = {
  error: null,
  helper: null,
  label: null,
  size: SIZE.MEDIUM,
}

TextInput.propTypes = {
  error: PropTypes.string,
  helper: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
}

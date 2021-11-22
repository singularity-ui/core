import BetterPropTypes from 'better-prop-types'
import React, { ForwardRefRenderFunction } from 'react'
import ReactSelect from 'react-select'
import ReactSelectAsync from 'react-select/async'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'

const Label = styled.label<{
  size: Common.Size
}>`
  display: block;
  font-size: ${p => p.theme.typography.size[p.size] * 80}%;
  font-weight: 500;
  padding: 0 0 ${p => p.theme.padding.layout.tiny} 0;
`

const StyledSelect = styled(ReactSelect)<{
  hasError: boolean
  size: Common.Size
}>`
  .Select__control {
    background-color: ${p => p.theme.color.body.white};
    border: solid 1px ${p => (p.hasError ? p.theme.color.danger.default : p.theme.color.secondary.default)};
    border-radius: ${p => p.theme.appearance.borderRadius[p.size]};
    font-family: inherit;
    font-size: ${p => p.theme.typography.size[p.size] * 100}%;
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
      border: solid 1px ${p => (p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active)};
    }

    &--is-focused {
      box-shadow: 0 0 0 1px ${p => (p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active)};
    }
  }

  .Select__value-container {
    cursor: text;
    padding: ${p => p.theme.padding.input[p.size]};
  }
  .Select__placeholder {
    color: ${p => p.theme.color.body.light};
    margin: 0;
  }

  .Select__multi-value {
    background-color: ${p => p.theme.color.primary.background};
    border-radius: ${p => p.theme.appearance.borderRadius[p.size]};
    margin: 0 ${p => p.theme.padding.input[p.size]} 0 0;
  }
  .Select__multi-value__label {
    font-size: 75%;
    font-weight: 500;
    line-height: 1.5;
    padding-left: 0.5rem;
  }
  .Select__multi-value__remove {
    border-radius: 0 ${p => p.theme.appearance.borderRadius[p.size]} ${p => p.theme.appearance.borderRadius[p.size]} 0;
    cursor: pointer;

    :hover {
      background-color: ${p => p.theme.color.primary.active};
      color: ${p => p.theme.color.body.white};
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
    margin: ${p => p.theme.padding.input[p.size]} 0;
  }
  .Select__indicator {
    padding: ${p => p.theme.padding.input[p.size]};
  }
  .Select__indicator > svg {
    color: ${p => p.theme.color.body.light};
    height: calc(1.5rem * ${p => p.theme.typography.size[p.size]});
    width: calc(1.5rem * ${p => p.theme.typography.size[p.size]});
  }
` as any

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

type SelectProps = any & {
  className?: string
  error?: string
  helper?: string
  isAsync?: boolean
  label?: string
  size?: Common.Size
}
const SelectWithRef: ForwardRefRenderFunction<any, SelectProps> = (
  { className, error, helper, isAsync = false, label, size = SIZE.MEDIUM, ...props },
  ref,
) => {
  const hasError = typeof error === 'string' && error.length > 0

  return (
    <div className={className}>
      {label && (
        <Label className="Label" size={size}>
          {label}
        </Label>
      )}

      <StyledSelect
        ref={ref}
        as={isAsync ? ReactSelectAsync : undefined}
        className="Select"
        classNamePrefix="Select"
        hasError={hasError}
        size={size}
        {...props}
      />

      {!error && helper && <Helper className="Helper">{helper}</Helper>}

      {error && <Error className="Error">{error}</Error>}
    </div>
  )
}

export const Select = React.forwardRef(SelectWithRef)

Select.displayName = 'Select'

Select.propTypes = {
  error: BetterPropTypes.string.isOptionalButNotNull,
  helper: BetterPropTypes.string.isOptionalButNotNull,
  isAsync: BetterPropTypes.bool.isOptionalButNotNull,
  label: BetterPropTypes.string.isOptionalButNotNull,
  size: BetterPropTypes.oneOf(SIZES).isOptionalButNotNull,
}

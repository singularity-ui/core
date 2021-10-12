import PropTypes from 'prop-types'
import React from 'react'
import ReactSelect from 'react-select'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'

const Label = styled.label`
  display: block;
  font-size: ${p => p.theme.typography.size[p.size] * 80}%;
  font-weight: 500;
  padding: 0 0 ${p => p.theme.padding.layout.tiny} 0;
`

const StyledSelect = styled(ReactSelect)`
  .Select__control {
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
      box-shadow: 0 0 0 1px #000;
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

  .Select__input-container {
    margin: 0;
    padding: 0;
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

const Select = React.forwardRef(({ className, error, helper, label, options, size, ...props }, ref) => {
  const hasError = error !== null

  return (
    <div className={className}>
      {label && (
        <Label className="Label" size={size}>
          {label}
        </Label>
      )}

      <StyledSelect
        ref={ref}
        className="Select"
        classNamePrefix="Select"
        hasError={hasError}
        options={options}
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
})

Select.displayName = 'Select'

Select.defaultProps = {
  error: null,
  helper: null,
  label: null,
  size: SIZE.MEDIUM,
}

Select.propTypes = {
  error: PropTypes.string,
  helper: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  size: PropTypes.oneOf(SIZES),
}

export default Select

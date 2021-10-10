import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { ACCENT, ACCENTS, SIZE, SIZES } from '../common/constants'

const StyledButton = styled.button`
  background-color: ${p => p.theme.color[p.accent].default};
  border: solid 1px ${p => p.theme.color[p.accent].default};
  border-radius: ${p => p.theme.appearance.borderRadius[p.size]};
  color: white;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => Math.round(p.theme.typography.size[p.size] * 100)}%;
  font-weight: 400;
  padding: ${p => p.theme.padding.button[p.size]};
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;

  :disabled {
    opacity: 0.65;
  }

  :hover {
    background-color: ${p => p.theme.color[p.accent].active};
  }
`

const Button = React.forwardRef(({ accent, children, size, type, ...props }, ref) => (
  <StyledButton ref={ref} accent={accent} size={size} type={type} {...props}>
    {children}
  </StyledButton>
))

Button.displayName = 'Button'

Button.defaultProps = {
  accent: ACCENT.PRIMARY,
  size: SIZE.MEDIUM,
  type: 'button',
}

Button.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button

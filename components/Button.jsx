import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { COLOR, COLORS } from '../common/constants'
import theme from '../common/theme'

const StyledButton = styled.button`
  background-color: ${p => p.theme.color[p.color].default};
  border: 0;
  color: white;
  cursor: pointer;
  font-family: ${p => p.theme.typography.font.default.family};
  font-size: ${p => p.theme.typography.font.default.size};
  font-weight: ${p => p.theme.typography.font.default.weight};
  padding: 0.5rem 1rem;
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;

  :disabled {
    opacity: 0.65;
  }

  :hover {
    background-color: ${p => p.theme.color[p.color].active};
  }
`

const Button = React.forwardRef(({ children, color, type, ...props }, ref) => (
  <ThemeProvider theme={theme}>
    <StyledButton ref={ref} className="Button" color={color} type={type} {...props}>
      {children}
    </StyledButton>
  </ThemeProvider>
))

Button.displayName = 'Button'

Button.defaultProps = {
  color: COLOR.PRIMARY,
  type: 'button',
}

Button.propTypes = {
  color: PropTypes.oneOf(COLORS),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
}

export default Button
